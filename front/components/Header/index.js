import React from "react";
import SearchBarForm from "../SearchBarForm";
import HeaderLogInOut from "../HeaderLogInOut";
import { HeaderWrapper, Logo } from "./style";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>F</Logo>
      <SearchBarForm />
      <HeaderLogInOut />
    </HeaderWrapper>
  );
};

export default Header;
