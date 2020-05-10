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
  return (
    comment && (
      <CommentForm
        content={comment.content}
        commentId={comment.id}
        postId={comment.PostId}
      />
    )
  );
};

CommentEdit.getInitialProps = async context => {
  const id = context.query.id;
  return { id };
};
export default CommentEdit;
