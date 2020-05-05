import React, { useEffect, useState } from "react";
import SearchBarForm from "./SearchBarForm";
import LogInOutBtn from "./LogInOutBtn";
import {
  HeaderWrapper,
  LogoWrapper,
  Title,
  IconWrapper,
  LogInWrapper,
  LogInButton,
  HoverWrapper,
  HeaderContentWrapper
} from "./style";
import { useSelector } from "react-redux";
import Link from "next/link";
import { SearchOutlined } from "@ant-design/icons";
import { ATag } from "../../styles/GlobalComponentStyles";
import { AvatarWrap } from "./SearchBarForm/style";
import Avatar from "../Util/Avatar";
import UserSetting from "../../containers/UserSetting";
import SimpleHeader from "../SimpleHeader";
const Header = ({ isShowLogo }) => {
  console.log("isShowLogo", isShowLogo);
  const { me } = useSelector(state => state.user);
  const [avatarClick, setAvatarClick] = useState(false);
  const onClickAvatar = () => {
    setAvatarClick(true);
    document.body.style.overflowY = "hidden";
  };
  return isShowLogo ? (
    <HeaderWrapper>
      <HeaderContentWrapper isLogin={me ? true : false}>
        <LogoWrapper>
          <Link href="/" prefetch>
            <Title>
              <img src="/logo.jpg" width="180px" />
            </Title>
          </Link>
        </LogoWrapper>
        <IconWrapper>
          <Link href="/search" prefetch>
            <HoverWrapper>
              <ATag style={{ textDecoration: "none" }}>
                <SearchOutlined style={{ fontSize: "1.4rem" }} />
              </ATag>
            </HoverWrapper>
          </Link>
        </IconWrapper>
        {me ? (
          <AvatarWrap style={{ display: "flex", justifyContent: "flex-end" }}>
            <Avatar onClick={onClickAvatar} img={me.img} size="large"></Avatar>
          </AvatarWrap>
        ) : (
          <Link href="/login" prefetch>
            <LogInWrapper>
              <ATag>
                <LogInButton>로그인</LogInButton>
              </ATag>
            </LogInWrapper>
          </Link>
        )}
      </HeaderContentWrapper>
      {avatarClick ? (
        <UserSetting
          setAvatarClick={setAvatarClick}
          avatarClick={avatarClick}
        />
      ) : null}
    </HeaderWrapper>
  ) : (
    <SimpleHeader />
  );
};

export default Header;
