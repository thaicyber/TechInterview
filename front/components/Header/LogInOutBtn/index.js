import React from "react";
import { LogInOutBtnWrapper, Button } from "./style";

const LogInOutBtn = () => {
  return (
    <LogInOutBtnWrapper>
      <Button>로그인</Button>
      <Button>로그아웃</Button>
    </LogInOutBtnWrapper>
  );
};

export default LogInOutBtn;
