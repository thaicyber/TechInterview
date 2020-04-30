import React, { useEffect } from "react";
import SearchBarForm from "./SearchBarForm";
import LogInOutBtn from "./LogInOutBtn";
import { HeaderWrapper, TitleWrapper, Title } from "./style";
import { useSelector } from "react-redux";
import Link from "next/link";
const Header = () => {
  const { me } = useSelector(state => state.user);
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <Link href="/" prefetch>
          <Title>
            {/* <img src="/logo2.png" /> */}
            TechInterview
          </Title>
        </Link>
      </TitleWrapper>
      <SearchBarForm />
      {me ? null : <LogInOutBtn />}
    </HeaderWrapper>
  );
};

export default Header;
