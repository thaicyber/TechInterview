import React from "react";
import {
  UserSettingWrapper,
  UserSettingContent,
  TopContent,
  BottomContent,
  TitleWrap,
  Title,
  CancelWrap,
  AvatarWrap,
  Avatar,
  NicknameWrap,
  Nickname
} from "./style";
import { CloseOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
const UserSetting = ({ setAvatarClick }) => {
  const { me } = useSelector(state => state.user);
  const onClickCancel = () => {
    if (setAvatarClick) {
      setAvatarClick(false);
      document.body.style.overflowY = "scroll";
    }
  };
  return (
    <UserSettingWrapper>
      <UserSettingContent>
        <TopContent>
          <TitleWrap>
            <Title>계정정보</Title>
          </TitleWrap>
          <CancelWrap onClick={onClickCancel}>
            <CloseOutlined style={{ fontSize: "18px", color: "#1B98E5" }} />
          </CancelWrap>
        </TopContent>
        <BottomContent>
          <AvatarWrap>
            <Avatar />
          </AvatarWrap>
          <NicknameWrap>
            <Nickname>{me && me.nickname}</Nickname>
          </NicknameWrap>
        </BottomContent>
      </UserSettingContent>
    </UserSettingWrapper>
  );
};

export default UserSetting;
