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
  NicknameWrap,
  Nickname,
  FollowerWrap,
  LogOutWrap
} from "./style";
import { CloseOutlined, LogoutOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { LOG_OUT_REQUEST } from "../../reducers/user";
import Link from "next/link";
import Avatar from "../Util/Avatar";
import Theme from "../../styles/Theme";
const UserSetting = ({ setAvatarClick }) => {
  const { me, isLoggingOut } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const onClickCancel = () => {
    if (setAvatarClick) {
      setAvatarClick(false);
      document.body.style.overflowY = "scroll";
    }
  };
  const onClickLogOut = () => {
    dispatch({
      type: LOG_OUT_REQUEST
    });
    onClickCancel();
  };
  return (
    <UserSettingWrapper>
      <UserSettingContent>
        <TopContent>
          <TitleWrap>
            <Title>계정정보</Title>
          </TitleWrap>
          <CancelWrap onClick={onClickCancel}>
            <CloseOutlined
              style={{ fontSize: "18px", color: Theme.themeColor }}
            />
          </CancelWrap>
        </TopContent>
        <BottomContent>
          <AvatarWrap>
            <Avatar size="medium" img={me.img} />
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
          <LogOutWrap onClick={onClickLogOut}>
            <span
              style={{
                fontSize: "1.2rem",
                fontWeight: "500"
              }}
            >
              Log out
            </span>
          </LogOutWrap>
          {me && me.level && me.level === "admin" && (
            <Link href="/admin">
              <a>Admin</a>
            </Link>
          )}
        </BottomContent>
      </UserSettingContent>
    </UserSettingWrapper>
  );
};

export default UserSetting;
