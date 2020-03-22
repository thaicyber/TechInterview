import React from "react";
import { LogInOutBtnWrapper, AtdButton } from "./style";
import Link from "next/link";
const LogInOutBtn = () => {
  return (
    <LogInOutBtnWrapper>
      <AtdButton>로그인</AtdButton>
      <Link href="/signup">
        <a style={{ width: "100%" }}>
          <AtdButton type="primary">회원가입</AtdButton>
        </a>
      </Link>
    </LogInOutBtnWrapper>
  );
};

export default LogInOutBtn;
