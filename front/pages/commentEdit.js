import React from "react";
import { useSelector } from "react-redux";
import CommentForm from "../containers/CommentForm";
const CommentEdit = ({ id }) => {
  const { comments } = useSelector(state => state.post);
  const comment =
    comments && comments.length > 0 && comments.find(v => v.id === Number(id));
  console.log("CommentEdit comment", comment);
  return (
    <CommentForm
      content={comment && comment.content}
      commentId={comment && comment.id}
      postId={comment && comment.PostId}
    />
  );
};

CommentEdit.getInitialProps = async context => {
  const id = context.query.id;
  return { id };
};
export default CommentEdit;
