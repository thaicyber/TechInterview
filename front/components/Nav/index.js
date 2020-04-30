import React, { useState } from "react";
import { NavWrapper, NavIconWrapper } from "./style";
import Link from "next/link";
import UserSetting from "../../containers/UserSetting";
import { useSelector } from "react-redux";
const Nav = () => {
  const [showMyAccount, setShowMyAccount] = useState(false);
  const { me } = useSelector(state => state.user);
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
        {me ? (
          <NavIconWrapper onClick={onClickMyAccount}>
            <a>내 계정</a>
          </NavIconWrapper>
        ) : (
          <Link href="/login" prefetch>
            <NavIconWrapper>
              <a>내 계정</a>
            </NavIconWrapper>
          </Link>
        )}
      </NavWrapper>
    </>
  );
};

export default Nav;
