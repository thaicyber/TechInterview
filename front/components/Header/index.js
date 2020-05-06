import React, { useState } from "react";
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
const Header = ({ isShowLogo }) => {
  const { me } = useSelector(state => state.user);
  const [avatarClick, setAvatarClick] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const onClickAvatar = () => {
    setAvatarClick(true);
    document.body.style.overflowY = "hidden";
  };
  // isShowLogo가 False 경우, 로고가 없는 간단한 SimpleHeader컴포넌트 보여줌.
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
              <LogInButton>
                <ATag>로그인 / 가입</ATag>
              </LogInButton>
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
