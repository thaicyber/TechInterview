import React, { useEffect } from "react";
import { LOAD_FOLLOWERS_REQUEST } from "../reducers/user";
import { useSelector, useDispatch } from "react-redux";
import AvatarNickname from "../components/AvatarNickname";
import Announce from "../components/Announce";
import Router from "next/router";
const Followers = () => {
  const distpatch = useDispatch();
  const { followerList } = useSelector(state => state.user);
  // useEffect(() => {
  //   if (!followerList) {
  //     distpatch({
  //       type: LOAD_FOLLOWERS_REQUEST,
  //       data:
  //         id ||
  //         (Router &&
  //           Router.router &&
  //           Router.router.query &&
  //           Router.router.query.id)
  //     });
  //   }
  // }, []);
  return (
    <>
      {followerList ? (
        followerList.map(follower => {
          return <AvatarNickname key={follower.id} userInfo={follower} />;
        })
      ) : (
        <Announce message="팔로워가 없습니다." />
      )}
    </>
  );
};
Followers.getInitialProps = async context => {
  const id = context.query.id;
  context.store.dispatch({
    type: LOAD_FOLLOWERS_REQUEST,
    data: id
  });
  return { id };
};
export default Followers;
