import React, { useState } from "react";
import { NavWrapper, NavIconWrapper } from "./style";
import Link from "next/link";
import UserSetting from "../../containers/UserSetting";
const Nav = () => {
  const [showMyAccount, setShowMyAccount] = useState(false);
  const onClickMyAccount = () => {
    setShowMyAccount(true);
  };
  return (
    <>
      {showMyAccount && <UserSetting setShowMyAccount={setShowMyAccount} />}
      <NavWrapper>
        <Link href="/likePosts" prefetch>
          <NavIconWrapper>
            <a>좋아요</a>
          </NavIconWrapper>
        </Link>
        <NavIconWrapper>인터뷰</NavIconWrapper>
        <NavIconWrapper>채용</NavIconWrapper>
        <Link href="/" prefetch>
          <NavIconWrapper onClick={onClickMyAccount}>
            <a>내 계정</a>
          </NavIconWrapper>
        </Link>
      </NavWrapper>
    </>
  );
};

export default Nav;
