import React, { useState } from "react";
import { AtdForm, AtdInput, Avatar } from "./style";
import { useSelector } from "react-redux";
import UserSetting from "../../UserSetting";
const onSubmitForm = e => {
  e.preventDefault();
  console.log("!!!!submit");
};
const SearchBarForm = () => {
  const [avatarClick, setAvatarClick] = useState(false);
  const { me } = useSelector(state => state.user);
  const onClickAvatar = () => {
    setAvatarClick(true);
    document.body.style.overflowY = "hidden";
  };
  return (
    <AtdForm onSubmit={onSubmitForm}>
      {me ? (
        <>
          <Avatar onClick={onClickAvatar}></Avatar>
          <AtdInput htmlType="submit" isLogin={true} />
        </>
      ) : (
        <AtdInput htmlType="submit" />
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
