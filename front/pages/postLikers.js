import React from "react";
import { LOAD_POST_LIKERS_REQUEST } from "../reducers/post";
import { useSelector } from "react-redux";
const PostLikers = ({ id }) => {
  const { postLikers } = useSelector(state => state.post);
  console.log("postLikers", postLikers);
  return <div>PostLikers/{id}</div>;
};

PostLikers.getInitialProps = async context => {
  const id = context.query.id;
  context.store.dispatch({
    type: LOAD_POST_LIKERS_REQUEST,
    data: id
  });
  return { id };
};

export default PostLikers;
