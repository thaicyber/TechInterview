import React from "react";
import {
  FollowerWrap,
  AvartarWrap,
  UserNicknameWrap,
  UserNickname
} from "./styles";
import Avatar from "../Util/Avatar";

const AvatarNickname = ({ follower }) => {
  console.log("follower", follower);
  return (
    <FollowerWrap>
      <AvartarWrap>
        <Avatar size="smallLarge" />
      </AvartarWrap>
      <UserNicknameWrap>
        <UserNickname>{follower.nickname}</UserNickname>
      </UserNicknameWrap>
    </FollowerWrap>
  );
};

export default AvatarNickname;
