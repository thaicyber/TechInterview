import React from "react";
import {
  FollowerWrap,
  AvartarWrap,
  UserNicknameWrap,
  UserNickname
} from "./styles";
import Avatar from "../Util/Avatar";
import Link from "next/link";
const AvatarNickname = ({ userInfo }) => {
  //   console.log("userInfo", userInfo);
  return (
    <FollowerWrap>
      <Link
        href={{ pathname: "/profile", query: { id: userInfo.id } }}
        as={`/profile/${userInfo.id}`}
      >
        <AvartarWrap>
          <Avatar size="smallLarge" />
        </AvartarWrap>
      </Link>
      <UserNicknameWrap>
        <UserNickname>{userInfo.nickname}</UserNickname>
      </UserNicknameWrap>
    </FollowerWrap>
  );
};

export default AvatarNickname;
