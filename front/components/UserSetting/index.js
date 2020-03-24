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
  Nickname,
  FollowerWrap
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
          <FollowerWrap>
            <span
              style={{
                fontSize: "1.2rem",
                fontWeight: "500",
                marginRight: "0.5rem"
              }}
            >
              0
            </span>
            <span style={{ fontSize: "1.2rem" }}>Follower</span>
          </FollowerWrap>
        </BottomContent>
      </UserSettingContent>
    </UserSettingWrapper>
  );
};

export default UserSetting;
