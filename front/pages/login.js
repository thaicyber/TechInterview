import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import useInput from "../customHooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN_REQUEST } from "../reducers/user";
import Router from "next/router";
const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
`;
const LoginContent = styled.div`
  border: 1px solid lightgray;
  min-height: 600px;
  min-width: 60%;
`;
const BtnWrapper = styled.div``;
const Label = styled.label``;
const IdWrapper = styled.div``;
const PasswordWrapper = styled.div``;
const AtdButton = styled(Button)`
  width: 100%;
`;
const Login = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const dispatch = useDispatch();
  const { me, isLoggingIn } = useSelector(state => state.user);
  const onSubmitLogin = useCallback(e => {
    e.preventDefault();
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        userId: email,
        password
      }
    });
  });
  useEffect(() => {
    if (me) {
      alert("로그인 성공!");
      Router.push("/");
    }
  }, [me]);
  return (
    <LoginWrapper>
      <LoginContent>
        <Form onSubmit={onSubmitLogin}>
          <IdWrapper>
            <Label htmlFor="user-email">이메일</Label>
            <Input
              name="user-email"
              required
              value={email}
              placeholder="이메일을 입력하세요."
              onChange={setEmail}
            />
          </IdWrapper>
          <PasswordWrapper>
            <Label htmlFor="user-password">비밀번호</Label>
            <Input
              name="user-password"
              required
              value={password}
              placeholder="비밀번호를 입력하세요."
              onChange={setPassword}
            />
          </PasswordWrapper>
          <BtnWrapper>
            <AtdButton type="primary" htmlType="submit" loading={isLoggingIn}>
              로그인
            </AtdButton>
          </BtnWrapper>
        </Form>
      </LoginContent>
    </LoginWrapper>
  );
};

export default Login;
