import React from "react";
import { LogInOutBtnWrapper, AtdButton } from "./style";
import Link from "next/link";
const LogInOutBtn = () => {
  return (
    <LogInOutBtnWrapper>
      <Link href="/login" prefetch>
        <a style={{ width: "100%" }}>
          <AtdButton>로그인</AtdButton>
        </a>
      </Link>
      <Link href="/signup" prefetch>
        <a style={{ width: "100%" }}>
          <AtdButton type="primary">회원가입</AtdButton>
        </a>
      </Link>
    </LogInOutBtnWrapper>
  );
};

export default LogInOutBtn;
