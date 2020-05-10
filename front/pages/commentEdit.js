import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentForm from "../containers/CommentForm";
import Router from "next/router";
import { LOAD_COMMENT_REQUEST } from "../reducers/post";
const CommentEdit = ({ id }) => {
  const dispatch = useDispatch();
  const { comment } = useSelector(state => state.post);
  useEffect(() => {
    dispatch({
      type: LOAD_COMMENT_REQUEST,
      data:
        id ||
        (Router &&
          Router.router &&
          Router.router.query &&
          Router.router.query.tag)
    });
  }, []);
  // const comment =
  //   comments &&
  //   comments.length > 0 &&
  //   comments.find(v => {
  //     console.log("v.id", v.id, "Numberid", Number(id));
  //     return v.id === Number(id);
  //   });
  // console.log("찾은 comment", comment);
  // 의존성 문제로 서버에서 id로 comment 요청하고, 그걸로 받아서 commentForm에 뿌려주기
  // api만들어야함.
  return (
    comment && (
      <CommentForm
        content={comment.content}
        commentId={comment.id}
        postId={comment.PostId}
      />
    )
  );
  // return comment ? (
  // <CommentForm
  //   content={comment && comment.content}
  //   commentId={comment && comment.id}
  //   postId={comment && comment.PostId}
  // />
  // ) : null;
};

CommentEdit.getInitialProps = async context => {
  const id = context.query.id;
  return { id };
};
export default CommentEdit;
