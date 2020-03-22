import React from "react";
import SearchBarForm from "./SearchBarForm";
import LogInOutBtn from "./LogInOutBtn";
import { HeaderWrapper, Logo } from "./style";
const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Frank</Logo>
      <SearchBarForm />
      <LogInOutBtn />
    </HeaderWrapper>
  );
};

export default Header;
