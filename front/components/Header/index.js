import React, { useEffect } from "react";
import SearchBarForm from "./SearchBarForm";
import LogInOutBtn from "./LogInOutBtn";
import {
  HeaderWrapper,
  LogoWrapper,
  Title,
  IconWrapper,
  LogInWrapper,
  LogInButton
} from "./style";
import { useSelector } from "react-redux";
import Link from "next/link";
import { SearchOutlined } from "@ant-design/icons";
const Header = () => {
  const { me } = useSelector(state => state.user);
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Link href="/" prefetch>
          <Title>
            <img src="/logo.jpg" width="180px" />
            {/* TechInterview */}
          </Title>
        </Link>
      </LogoWrapper>
      <IconWrapper>
        <SearchOutlined style={{ fontSize: "1.4rem" }} />
      </IconWrapper>
      <LogInWrapper>
        <LogInButton>로그인</LogInButton>
      </LogInWrapper>
    </HeaderWrapper>
  );
};

export default Header;
