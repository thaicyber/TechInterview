import React, { useEffect, useState } from "react";
import {
  HeaderWrapper,
  LogoWrapper,
  Title,
  IconWrapper,
  LogInWrapper,
  LogInButton,
  HoverWrapper,
  HeaderContentWrapper,
  AvatarWrap
} from "./style";
import { useSelector } from "react-redux";
import Link from "next/link";
import { SearchOutlined } from "@ant-design/icons";
import { ATag } from "../../styles/GlobalComponentStyles";
import Avatar from "../Util/Avatar";
import UserSetting from "../../containers/UserSetting";
import SimpleHeader from "../SimpleHeader";
// import { isMobile } from "../Util/meta";
const Header = ({ isShowLogo }) => {
  console.log("isShowLogo", isShowLogo);
  const { me } = useSelector(state => state.user);
  const [avatarClick, setAvatarClick] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const onClickAvatar = () => {
    setAvatarClick(true);
    document.body.style.overflowY = "hidden";
  };
  // useEffect(() => {
  //   if (navigator.userAgent.indexOf("Mobi") > -1) {
  //     setIsMobile(true);
  //   }
  // }, [navigator.userAgent.indexOf("Mobi") > -1]);

  return isShowLogo ? (
    <HeaderWrapper>
      <HeaderContentWrapper isLogin={me ? true : false}>
        <LogoWrapper>
          <Link href="/" prefetch>
            <Title>
              <img src="/logo.jpg" width={"170px"} />
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
                <LogInButton>로그인 / 가입</LogInButton>
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
