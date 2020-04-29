import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { Form, Button } from "antd";
import useInput from "../customHooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN_REQUEST } from "../reducers/user";
import Router from "next/router";
import Theme from "../styles/Theme";
import { device } from "../styles/device";
const LoginWrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 9% 28% 63%;

  @media ${device.tablet} {
    width: 60%;
    margin: 0 auto;
  }
  @media ${device.laptop} {
    width: 35%;
    margin: 0 auto;
  }
`;
const LoginContent = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`;
const BtnWrapper = styled.div``;
const Label = styled.label`
  margin-left: 0.2rem;
`;
const IdWrapper = styled.div`
  margin-bottom: 1rem;
`;
const PasswordWrapper = styled.div`
  margin-bottom: 1rem;
`;
const AtdButton = styled(Button)`
  width: 100%;
  height: 3.1rem;
`;
const TopWrap = styled.div`
  display: flex;
`;
const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const IntroWrap = styled.div`
  padding: 4rem 2rem 2rem 2rem;
  text-align: center;
`;
const TopIntroWrap = styled.h1`
  font-weight: 600;
  margin-bottom: 2rem;
  font-size: 1.5rem;
`;
const BottomIntroWrap = styled.h2`
  font-weight: 400;
  font-size: 1rem;
`;
const UserInput = styled.input`
  width: 100%;
  height: 3.1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  border-radius: 0.3rem;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  font-size: 1rem;
  color: #333;
  resize: none;
  margin-top: 0.5rem;
  &:focus {
    outline: none !important;
    border: 1px solid ${Theme.themeColor};
    border-radius: 0.3rem;
  }
`;

const Login = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const dispatch = useDispatch();
  const { me, isLoggingIn } = useSelector(state => state.user);
  const emailInput = useRef();
  useEffect(() => {
    emailInput.current.focus();
  }, []);
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
      <TopWrap>
        <LogoWrap>
          <span>테크인터뷰</span>
        </LogoWrap>
      </TopWrap>
      <IntroWrap>
        <TopIntroWrap>기술면접 준비는 테크인터뷰!</TopIntroWrap>
        <BottomIntroWrap>
          테크인터뷰는 기술면접에 필요한 포스트들 중 엄선된 포스트만 선별해서
          모은 서비스 입니다.
        </BottomIntroWrap>
      </IntroWrap>
      <LoginContent>
        <Form onSubmit={onSubmitLogin}>
          <IdWrapper>
            <Label htmlFor="user-email">이메일</Label>
            <UserInput
              name="user-email"
              required
              value={email}
              placeholder="이메일을 입력해 주세요."
              onChange={setEmail}
              ref={emailInput}
            />
          </IdWrapper>
          <PasswordWrapper>
            <Label htmlFor="user-password">비밀번호</Label>
            <UserInput
              name="user-password"
              required
              value={password}
              placeholder="비밀번호를 입력해 주세요."
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
