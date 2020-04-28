import React from "react";
import { NavWrapper, NavIconWrapper } from "./style";
import Link from "next/link";
const Nav = () => {
  return (
    <NavWrapper>
      <Link href="/" prefetch>
        <NavIconWrapper>
          <a>홈</a>
        </NavIconWrapper>
      </Link>
      <NavIconWrapper>검색</NavIconWrapper>
      <Link ="/likePosts" prefetch>
        <NavIconWrapper>
          <a>좋아요</a>
        </NavIconWrapper>
      </Link>
      <NavIconWrapper>북마크</NavIconWrapper>
    </NavWrapper>
  );
};

export default Nav;
