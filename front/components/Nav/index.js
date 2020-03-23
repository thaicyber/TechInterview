import React from "react";
import { NavWrapper, NavIconWrapper } from "./style";

const Nav = () => {
  return (
    <NavWrapper>
      <NavIconWrapper>홈</NavIconWrapper>
      <NavIconWrapper>검색</NavIconWrapper>
      <NavIconWrapper>좋아요</NavIconWrapper>
      <NavIconWrapper>북마크</NavIconWrapper>
    </NavWrapper>
  );
};

export default Nav;
