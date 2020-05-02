import React, { useEffect } from "react";
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
const Header = () => {
  const { me } = useSelector(state => state.user);
  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <LogoWrapper>
          <Link href="/" prefetch>
            <Title>
              <img src="/logo.jpg" width="180px" />
              {/* TechInterview */}
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
        <Link href="/login" prefetch>
          <LogInWrapper>
            <ATag>
              <LogInButton>로그인</LogInButton>
            </ATag>
          </LogInWrapper>
        </Link>
      </HeaderContentWrapper>
    </HeaderWrapper>
  );
};

export default Header;
