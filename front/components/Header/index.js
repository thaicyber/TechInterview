import React, { useEffect } from "react";
import SearchBarForm from "./SearchBarForm";
import LogInOutBtn from "./LogInOutBtn";
import { HeaderWrapper, TitleWrapper, Title } from "./style";
import { useSelector } from "react-redux";
const Header = () => {
  const { me } = useSelector(state => state.user);
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <Title>IT 스타트업 기술 블로그 모음</Title>
      </TitleWrapper>
      <SearchBarForm />
      {me ? null : <LogInOutBtn />}
    </HeaderWrapper>
  );
};

export default Header;
