import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  CommentFormWrapper,
  InputWrap,
  FormWrap,
  BtnWrap,
  SubmitBtnWrap
} from "./style";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { ADD_COMMENT_REQUEST, EDIT_COMMENT_REQUEST } from "../../reducers/post";
import Button from "../../components/Util/Button";
import Link from "next/link";
import Router from "next/router";
import { useSelector } from "react-redux";
const CommentForm = props => {
  const { postId, content, commentId } = props;
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  const onChangeText = e => {
    setText(e.target.value);
  };
  const inputEl = useRef();
  useEffect(() => {
    if (content) {
      setText(content.replace(/(<br>|<br\/>|<br \/>)/g, "\r\n"));
      inputEl.current.focus();
    }
  }, []);
  const onSubmitComment = useCallback(
    e => {
      e.preventDefault();
      if (!me) {
        alert("로그인이 필요한 서비스입니다.");
        Router.push("/login");
        return;
      }
      if (!text || !text.trim()) {
        // trim 문자열 양쪽 공백제거
        // 스페이스만 친 경우에도 찾아낼 수 있음.
        return;
      }
      if (content) {
        dispatch({
          type: EDIT_COMMENT_REQUEST,
          data: {
            content: text.replace(/(\n|\r\n)/g, "<br>"),
            commentId,
            img: ""
          }
        });
      } else {
        dispatch({
          type: ADD_COMMENT_REQUEST,
          data: {
            content: text.replace(/(\n|\r\n)/g, "<br>"),
            postId,
            img: ""
          }
        });
        setText("");
      }
    },
    [text]
  );
  return (
    <CommentFormWrapper onSubmit={onSubmitComment}>
      <InputWrap>
        <FormWrap>
          <Input.TextArea
            style={{
              width: "100%",
              height: "100%",
              border: "1px solid lightgrey",
              fontSize: "1rem"
            }}
            onChange={onChangeText}
            placeholder="내용을 입력하세요."
            value={text}
            ref={inputEl}
          ></Input.TextArea>
        </FormWrap>
        <BtnWrap>
          <SubmitBtnWrap>
            {content || text ? (
              <Button
                style={{ backgroundColor: "#1da1f2", cursor: "pointer" }}
                onClick={onSubmitComment}
                htmlType="submit"
                color="active"
                size="small"
                borderRadius="50px"
              >
                <Link
                  href={{ pathname: "/comment", query: { id: postId } }}
                  prefetch
                  as={`/comment/${postId}`}
                >
                  <div style={{ display: "flex" }}>
                    <a
                      style={{
                        width: "70px",
                        height: "30px",
                        display: "block",
                        marginTop: "0.4rem"
                      }}
                    >
                      등록
                    </a>
                  </div>
                </Link>
              </Button>
            ) : (
              <Button
                style={{ backgroundColor: "#9dd5f9" }}
                size="small"
                borderRadius="50px"
              >
                등록
              </Button>
            )}
          </SubmitBtnWrap>
        </BtnWrap>
      </InputWrap>
    </CommentFormWrapper>
  );
};
export default CommentForm;
