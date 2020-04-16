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
  DeleteBtn
} from "./style";
import Avatar from "../Util/Avatar";
import { MoreOutlined } from "@ant-design/icons";
import Theme from "../../styles/Theme";
import { useSelector } from "react-redux";
const CommentCard = props => {
  const { comment } = props;
  const { me } = useSelector(state => state.user);
  const [editBtnClick, setEditBtnClick] = useState(false);
  const onClickEditBtn = useCallback(() => {
    setEditBtnClick(!editBtnClick);
  }, [editBtnClick]);
  useEffect(() => {
    if (editBtnClick) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [editBtnClick]);

  // console.log("comment", comment);
  // console.log("@@@@@me@@@@@@@@@", me);
  return (
    <>
      {editBtnClick && (
        <EditCommentWraper>
          <TopWrap></TopWrap>
          <BottomWrap>
            <EditBtnWrap>
              <EditBtn>Edit</EditBtn>
            </EditBtnWrap>
            <DeleteBtnWrap>
              <DeleteBtn>Delete</DeleteBtn>
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
            <Avatar size="small" />
          </AvatarWrap>
          <CommentContent>
            <CommentInfoWrap>
              <CommentAuthorWrap>
                <Author>{comment.User.nickname}</Author>
              </CommentAuthorWrap>
              <CommentCreatedWrap>
                <CreatedTime>{comment.createdAt}</CreatedTime>
              </CommentCreatedWrap>
            </CommentInfoWrap>
            <ContentWrap>{comment.content}</ContentWrap>
          </CommentContent>
          {comment && me && me.id === comment.UserId && (
            <Options onClick={onClickEditBtn}>
              <MoreOutlined
                style={{ fontSize: "25px", color: Theme.themeColor }}
              />
            </Options>
          )}
        </CommentCardContentWrap>
      </CommentCardWrapper>
    </>
  );
};
export default CommentCard;
