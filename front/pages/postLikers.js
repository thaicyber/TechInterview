import React from "react";

const PostLikers = ({ postId }) => {
  return <div>PostLikers/{postId}</div>;
};

PostLikers.getInitailProps = async context => {
  const postId = context.query.postId;
  context.store.dispatch({
    // type: LOAD_FOLLOWERS_REQUEST,
    // data: postId
  });
  return { postId };
};
export default PostLikers;
