import React from "react";
import SearchBarForm from "./SearchBarForm";
import LogInOutBtn from "./LogInOutBtn";
import { HeaderWrapper, TitleWrapper, Title } from "./style";
const Header = () => {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <Title>IT 스타트업 기술 블로그 모음</Title>
      </TitleWrapper>
      <SearchBarForm />
      <LogInOutBtn />
    </HeaderWrapper>
  );
};

export default Header;
