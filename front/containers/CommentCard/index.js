import React, { useState, useCallback, useEffect } from "react";
import {
  CommentCardWrapper,
  CommentCardContentWrap,
  CommentContent,
  Options,
  AvatarWrap,
  CommentAuthorWrap,
  CommentCreatedWrap,
  CommentInfoWrap,
  CreatedTime,
  Author,
  ContentWrap,
  EditCommentWraper,
  TopWrap,
  BottomWrap,
  CancelBtnWrap,
  CancelBtn,
  EditBtnWrap,
  EditBtn,
  DeleteBtnWrap,
  DeleteBtn,
  IconTitleWrap,
  IconTitle,
  DeleteMsgWrapper,
  MsgWrap,
  BtnWrap,
  DeleteCancelBtn,
  DeleteRequestBtn,
  ConfirmMessage,
  BtnMessage,
  CommentContentWrap
} from "./style";
import Avatar from "../../components/Util/Avatar";
import {
  MoreOutlined,
  DeleteOutlined,
  EditOutlined,
  LoadingOutlined
} from "@ant-design/icons";
import Theme from "../../styles/Theme";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_COMMENT_REQUEST } from "../../reducers/post";
import Link from "next/link";
import moment from "moment";
moment.locale("ko");
const CommentCard = props => {
  const { comment } = props;
  const { me } = useSelector(state => state.user);
  const { isDeletingComment, deletedComment } = useSelector(
    state => state.post
  );
  const [editBtnClick, setEditBtnClick] = useState(false);
  const [deleteBtnClick, setDeleteBtnClick] = useState(false);
  const dispatch = useDispatch();
  const onClickEditBtn = useCallback(() => {
    setEditBtnClick(!editBtnClick);
  }, [editBtnClick]);
  const onClickDeleteBtn = useCallback(() => {
    setDeleteBtnClick(!deleteBtnClick);
  }, [deleteBtnClick]);
  useEffect(() => {
    if (editBtnClick) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [editBtnClick]);
  const onClickDeleteRequestBtn = useCallback(
    commentId => () => {
      dispatch({
        type: DELETE_COMMENT_REQUEST,
        data: commentId,
        postId: comment.PostId
      });
    },
    [comment && comment.PostId]
  );
  useEffect(() => {
    if (isDeletingComment) {
      setDeleteBtnClick(false);
      setEditBtnClick(false);
    }
  }, [isDeletingComment]);

  // console.log("comment", comment);
  // console.log("@@@@@me@@@@@@@@@", me);
  return (
    <>
      {deleteBtnClick && (
        <DeleteMsgWrapper>
          <MsgWrap>
            <ConfirmMessage>정말로 삭제하시겠습니까?</ConfirmMessage>
          </MsgWrap>
          <BtnWrap>
            <DeleteCancelBtn onClick={onClickDeleteBtn}>
              <BtnMessage style={{ color: "black" }}>취소</BtnMessage>
            </DeleteCancelBtn>
            <DeleteRequestBtn onClick={onClickDeleteRequestBtn(comment.id)}>
              <BtnMessage style={{ color: "white" }}>삭제</BtnMessage>
            </DeleteRequestBtn>
          </BtnWrap>
        </DeleteMsgWrapper>
      )}
      {editBtnClick && (
        <EditCommentWraper>
          <TopWrap></TopWrap>
          <BottomWrap>
            <Link
              href={{ pathname: "/commentEdit", query: { id: comment.id } }}
              as={`/commentEdit/${comment.id}`}
            >
              <a>
                <EditBtnWrap>
                  <EditBtn>
                    <EditOutlined />
                    <IconTitleWrap>
                      <IconTitle>수정</IconTitle>
                    </IconTitleWrap>
                  </EditBtn>
                </EditBtnWrap>
              </a>
            </Link>
            <DeleteBtnWrap>
              <DeleteBtn onClick={onClickDeleteBtn}>
                <DeleteOutlined style={{ color: "red" }} />
                <IconTitleWrap>
                  <IconTitle style={{ color: "red" }}>삭제</IconTitle>
                </IconTitleWrap>
              </DeleteBtn>
            </DeleteBtnWrap>
            <CancelBtnWrap onClick={onClickEditBtn}>
              <CancelBtn>Cancel</CancelBtn>
            </CancelBtnWrap>
          </BottomWrap>
        </EditCommentWraper>
      )}
      <CommentCardWrapper>
        <CommentCardContentWrap>
          <AvatarWrap>
            <Avatar size="large" />
          </AvatarWrap>
          <CommentContent>
            <CommentAuthorWrap>
              <Author>{comment.User.nickname}</Author>
            </CommentAuthorWrap>
            <CommentCreatedWrap>
              <CreatedTime>
                {comment.createdAt &&
                  moment(comment.createdAt).format("YYYY년 MM월 DD일")}
              </CreatedTime>
            </CommentCreatedWrap>
          </CommentContent>
          {comment && me && me.id === comment.UserId && (
            <Options onClick={onClickEditBtn}>
              <MoreOutlined
                style={{ fontSize: "25px", color: Theme.themeColor }}
              />
            </Options>
          )}
        </CommentCardContentWrap>
        <ContentWrap>
          <CommentContentWrap>
            {comment.content.split("<br>").map((item, idx) => {
              return (
                <span key={idx}>
                  {item}
                  <br />
                </span>
              );
            })}
          </CommentContentWrap>
        </ContentWrap>
      </CommentCardWrapper>
    </>
  );
};
export default CommentCard;
