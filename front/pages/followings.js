import React, { useEffect } from "react";
import { LOAD_FOLLOWINGS_REQUEST } from "../reducers/user";
import { useSelector, useDispatch } from "react-redux";
import AvatarNickname from "../components/AvatarNickname";
import Announce from "../components/Announce";
const Followings = ({ id }) => {
  const dispatch = useDispatch();
  const { followingList } = useSelector(state => state.user);
  useEffect(() => {
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
      data: id
    });
  }, []);
  return (
    <div style={{ marginTop: "4.5rem" }}>
      {followingList ? (
        followingList.map(following => {
          return <AvatarNickname key={following.id} userInfo={following} />;
        })
      ) : (
        <Announce message="팔로잉이 없습니다." />
      )}
    </div>
  );
};
Followings.getInitialProps = async context => {
  const id = context.query.id;
  context.store.dispatch({
    type: LOAD_FOLLOWINGS_REQUEST,
    data: id
  });
  return { id };
};
export default Followings;
