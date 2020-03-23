import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import useInput from "../customHooks/useInput";

const SignupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  @media (min-width: 1025px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
`;
const SignupContent = styled.div`
  border: 1px solid lightgray;
  min-height: 500px;
  min-width: 55%;
  @media (min-width: 1025px) {
    border-radius: 1rem;
    background-color: white;
    min-height: 85%;
    min-width: 45%;
    padding: 10px;
    margin: 0 10rem;
  }
`;
const Label = styled.label``;
const IdWrapper = styled.div``;
const EmailWrapper = styled.div``;
const PasswordWrapper = styled.div``;
const BtnWrapper = styled.div``;
const AtdButton = styled(Button)`
  width: 100%;
`;
const signup = () => {
  const [nickname, setNickname] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const onSubmitSignup = e => {
    e.preventDefault();
  };
  return (
    <SignupWrapper>
      <SignupContent>
        <Form onSubmit={onSubmitSignup}>
          <IdWrapper>
            <Label htmlFor="user-nickname">닉네임</Label>
            <Input
              name="user-nickname"
              required
              onChange={setNickname}
              placeholder="닉네임을 입력하세요."
              value={nickname}
            />
          </IdWrapper>
          <EmailWrapper>
            <Label htmlFor="user-Email">이메일</Label>
            <Input
              name="user-Email"
              required
              onChange={setEmail}
              placeholder="이메일을 입력하세요."
              value={email}
            />
          </EmailWrapper>
          <PasswordWrapper>
            <Label htmlFor="user-Password">비밀번호</Label>
            <Input
              type="password"
              name="user-Password"
              required
              onChange={setPassword}
              placeholder="8자 이상 입력해주세요."
              value={password}
            />
          </PasswordWrapper>
          <BtnWrapper>
            <AtdButton type="primary" htmlType="submit">
              회원가입
            </AtdButton>
          </BtnWrapper>
        </Form>
      </SignupContent>
    </SignupWrapper>
  );
};

export default signup;
