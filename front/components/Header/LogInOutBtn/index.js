import React from "react";
import { LogInOutBtnWrapper, AtdButton } from "./style";
const LogInOutBtn = () => {
  return (
    <LogInOutBtnWrapper>
      <AtdButton>로그인</AtdButton>
      <AtdButton type="primary">회원가입</AtdButton>
    </LogInOutBtnWrapper>
  );
};

export default LogInOutBtn;
