import React from "react";
import { LOAD_POST_LIKERS_REQUEST } from "../reducers/post";
import { useSelector } from "react-redux";
import Announce from "../components/Announce";
import AvatarNickname from "../components/AvatarNickname";
const PostLikers = () => {
  const { postLikers } = useSelector(state => state.post);
  return postLikers && postLikers.length > 0 ? (
    postLikers.map(liker => <AvatarNickname key={liker.id} userInfo={liker} />)
  ) : (
    <Announce message="좋아요가 없습니다." />
  );
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
