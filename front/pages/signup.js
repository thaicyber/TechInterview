import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import useInput from "../customHooks/useInput";
import { useSelector, useDispatch } from "react-redux";
import { SIGN_UP_REQUEST } from "../reducers/user";
import Router from "next/router";
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

const NotificationWrapper = styled.div`
  width: 100%;
`;
const NotificationContent = styled.span`
  color: red;
`;
const signup = () => {
  const [nickname, setNickname] = useInput("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();
  const { isSigningUp, me } = useSelector(state => state.user);
  useEffect(() => {
    if (me) {
      Router.push("/");
    }
  }, [me]);
  const onSubmitSignup = e => {
    e.preventDefault();
    if (emailError) {
      return alert("유효한 이메일 주소를 입력해주세요.");
    }
    if (passwordError) {
      return alert("비밀번호는 8자 이상 영문과 숫자 조합을 입력해주세요.");
    }
    dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        nickname,
        userId: email,
        password
      }
    });
  };
  const isValidCheckEmail = email => {
    let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(email);
  };
  const isValidCheckPassword = password => {
    let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
    return regExp.test(password);
  };
  const onChangeEmail = e => {
    const inputValue = e.target.value;
    if (isValidCheckEmail(inputValue)) {
      setEmail(inputValue);
      setEmailError(false);
    } else {
      setEmail(inputValue);
      setEmailError(true);
    }
  };
  const onChangePassword = e => {
    const inputValue = e.target.value;
    if (isValidCheckPassword(inputValue)) {
      setPassword(inputValue);
      setPasswordError(false);
    } else {
      setPassword(inputValue);
      setPasswordError(true);
    }
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
              onChange={onChangeEmail}
              placeholder="이메일을 입력하세요."
              value={email}
            />
            {emailError && (
              <NotificationWrapper>
                <NotificationContent>
                  유효한 이메일 주소를 입력해주세요.
                </NotificationContent>
              </NotificationWrapper>
            )}
          </EmailWrapper>
          <PasswordWrapper>
            <Label htmlFor="user-Password">비밀번호</Label>
            <Input
              type="password"
              name="user-Password"
              required
              onChange={onChangePassword}
              placeholder="8자 이상 영문과 숫자 조합"
              value={password}
            />
            {passwordError && (
              <NotificationWrapper>
                <NotificationContent>
                  8자 이상 영문과 숫자 조합을 입력해주세요.
                </NotificationContent>
              </NotificationWrapper>
            )}
          </PasswordWrapper>
          <BtnWrapper>
            <AtdButton type="primary" htmlType="submit" loading={isSigningUp}>
              회원가입
            </AtdButton>
          </BtnWrapper>
        </Form>
      </SignupContent>
    </SignupWrapper>
  );
};

export default signup;
