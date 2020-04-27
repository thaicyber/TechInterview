import React, { useState } from "react";
import { AtdForm, AtdInput } from "./style";
import { useDispatch, useSelector } from "react-redux";
import UserSetting from "../../../containers/UserSetting";
import Avatar from "../../Util/Avatar";
import Router from "next/router";
const SearchBarForm = () => {
  const dispatch = useDispatch();
  const [avatarClick, setAvatarClick] = useState(false);
  const { me } = useSelector(state => state.user);
  const [hashtag, setHashtag] = useState("");
  const onSubmitForm = e => {
    e.preventDefault();
    Router.push(
      { pathname: "/hashtag", query: { tag: hashtag } },
      `/hashtag/${hashtag}`
    );
  };
  const onClickAvatar = () => {
    setAvatarClick(true);
    document.body.style.overflowY = "hidden";
  };
  const onChangeInput = e => {
    setHashtag(e.target.value);
  };
  return (
    <AtdForm onSubmit={onSubmitForm}>
      {me ? (
        <>
          <Avatar onClick={onClickAvatar} img={me.img} size="small"></Avatar>
          <AtdInput onChange={onChangeInput} />
        </>
      ) : (
        <AtdInput onChange={onChangeInput} />
      )}
      {avatarClick ? (
        <UserSetting
          setAvatarClick={setAvatarClick}
          avatarClick={avatarClick}
        />
      ) : null}
    </AtdForm>
  );
};

export default SearchBarForm;
