import React from "react";
import {
  FollowerWrap,
  AvartarWrap,
  UserNicknameWrap,
  UserNickname
} from "./styles";
import Avatar from "../Util/Avatar";

const AvatarNickname = ({ userInfo }) => {
  console.log("userInfo", userInfo);
  return (
    <FollowerWrap>
      <AvartarWrap>
        <Avatar size="smallLarge" />
      </AvartarWrap>
      <UserNicknameWrap>
        <UserNickname>{userInfo.nickname}</UserNickname>
      </UserNicknameWrap>
    </FollowerWrap>
  );
};

export default AvatarNickname;
