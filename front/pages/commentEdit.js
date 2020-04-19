import React from "react";
import { useSelector } from "react-redux";
import CommentForm from "../components/CommentForm";
const commentEdit = ({ id }) => {
  const { comments } = useSelector(state => state.post);
  const comment = comments.find(v => v.id === Number(id));
  return (
    <CommentForm
      content={comment.content}
      commentId={id}
      postId={comment.PostId}
    />
  );
};

commentEdit.getInitialProps = async context => {
  const id = context.query.id;
  return { id };
};
export default commentEdit;
