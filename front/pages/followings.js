import React from "react";
import { LOAD_FOLLOWINGS_REQUEST } from "../reducers/user";
import { useSelector } from "react-redux";
import AvatarNickname from "../components/AvatarNickname";
import Announce from "../components/Announce";
const followings = () => {
  const { followingList } = useSelector(state => state.user);
  return (
    <>
      {followingList ? (
        followingList.map(following => {
          return <AvatarNickname userInfo={following} />;
        })
      ) : (
        <Announce message="팔로잉이 없습니다." />
      )}
    </>
  );
};
followings.getInitialProps = async context => {
  const id = context.query.id;
  context.store.dispatch({
    type: LOAD_FOLLOWINGS_REQUEST,
    data: id
  });
  return { id };
};
export default followings;
