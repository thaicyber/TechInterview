import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_USER_REQUEST } from "../reducers/user";
const profile = ({ id }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.user);
  useEffect(() => {
    dispatch({
      type: LOAD_USER_REQUEST,
      data: id
    });
  }, []);
  // console.log("userInfo", userInfo);
  return <div>profile</div>;
};

profile.getInitialProps = async context => {
  const id = context.query.id;
  return { id };
};
export default profile;
