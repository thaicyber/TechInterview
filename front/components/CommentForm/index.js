import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  CommentFormWrapper,
  UserImgWrap,
  InputWrap,
  FormWrap,
  BtnWrap,
  ImgUploadIconWrap,
  SubmitBtnWrap
} from "./style";
import Avatar from "../Util/Avatar";
import { Input } from "antd";
import { FileImageOutlined } from "@ant-design/icons";
import Theme from "../../styles/Theme";
import { useDispatch } from "react-redux";
import { ADD_COMMENT_REQUEST, EDIT_COMMENT_REQUEST } from "../../reducers/post";
import Button from "../Util/Button";
import Link from "next/link";
const CommentForm = props => {
  const { postId, content, commentId } = props;
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const onChangeText = e => {
    setText(e.target.value);
  };
  const inputEl = useRef();
  useEffect(() => {
    if (content) {
      setText(content);
    }
    inputEl.current.focus();
  }, []);
  const onSubmitComment = useCallback(
    e => {
      e.preventDefault();
      if (!text || !text.trim()) {
        // trim 문자열 양쪽 공백제거
        // 스페이스만 친 경우에도 찾아낼 수 있음.
        return;
      }
      if (content) {
        dispatch({
          type: EDIT_COMMENT_REQUEST,
          data: {
            content: text,
            commentId
          }
        });
      } else {
        dispatch({
          type: ADD_COMMENT_REQUEST,
          data: {
            content: text,
            postId
          }
        });
        setText("");
      }
    },
    [text]
  );
  return (
    <CommentFormWrapper onSubmit={onSubmitComment}>
      <UserImgWrap>
        <Avatar size="large" />
      </UserImgWrap>
      <InputWrap>
        <FormWrap>
          <Input.TextArea
            style={{
              width: "100%",
              height: "100%",
              border: "1px solid lightgrey"
            }}
            onChange={onChangeText}
            placeholder="내용을 입력하세요."
            value={text}
            ref={inputEl}
          ></Input.TextArea>
        </FormWrap>
        <BtnWrap>
          <ImgUploadIconWrap>
            <FileImageOutlined
              style={{ color: Theme.themeColor, fontSize: "1.3rem" }}
            />
          </ImgUploadIconWrap>
          <SubmitBtnWrap>
            <SubmitBtnWrap>
              {text ? (
                content ? (
                  <Button
                    onClick={onSubmitComment}
                    color="active"
                    size="small"
                    borderRadius="50px"
                  >
                    <Link
                      href={{ pathname: "/comment", query: { id: postId } }}
                      as={`/comment/${postId}`}
                    >
                      <a>등록</a>
                    </Link>
                  </Button>
                ) : (
                  <Button
                    color="active"
                    size="small"
                    htmlType="submit"
                    borderRadius="50px"
                  >
                    등록
                  </Button>
                )
              ) : (
                <Button color="inActive" size="small" borderRadius="50px">
                  등록
                </Button>
              )}
            </SubmitBtnWrap>
          </SubmitBtnWrap>
        </BtnWrap>
      </InputWrap>
    </CommentFormWrapper>
  );
};
export default CommentForm;
