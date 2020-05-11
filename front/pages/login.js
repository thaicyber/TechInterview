import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { Form, Button } from "antd";
import useInput from "../customHooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN_REQUEST, LOG_IN_FAILURE_RESET } from "../reducers/user";
import Router from "next/router";
import Theme from "../styles/Theme";
import { device } from "../styles/device";
import Link from "next/link";
import { isMobile } from "../components/Util/meta";
import { CloseOutlined } from "@ant-design/icons";
const LoginWrapper = styled.div`
  display: grid;
  grid-template-rows: 6% 30% 58% 6%;
  grid-auto-columns: 100%;
  @media ${device.mobileS} {
    height: 600px;
  }
  @media ${device.tablet} {
    width: 60%;
    margin: 0 auto;
  }
  @media ${device.laptop} {
    width: 35%;
    height: 100%;
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
  margin-top: 2rem;
`;
const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 1rem;
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
  font-size: 0.9rem;
`;
const IntroSignUpWrapper = styled.div`
  font-weight: 400;
  font-size: 1rem;

  & > span {
    display: block;
    margin-top: 1rem;
    color: black;
  }

  & > span span {
    color: ${Theme.themeColor};
  }
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
export const CancelWrap = styled.div`
  position: fixed;
  right: 1rem;
  top: 1rem;
  display: block;

  @media ${device.tablet} {
    padding: 0% 20%;
  }
  @media ${device.laptop} {
    padding: 0% 35%;
    right: 0;
  }
  @media ${device.laptopL} {
    padding: 0% 40%;
  }
  @media ${device.desktopS} {
    padding: 0% 45%;
  }
`;
const Login = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const dispatch = useDispatch();
  const { me, isLoggingIn, loginErrorReason } = useSelector(
    state => state.user
  );
  const emailInput = useRef();
  useEffect(() => {
    if (loginErrorReason) {
      alert(`${loginErrorReason}`);
      dispatch({
        type: LOG_IN_FAILURE_RESET
      });
    }
  }, [loginErrorReason]);
  useEffect(() => {
    if (!isMobile()) {
      emailInput.current.focus();
    }
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
      Router.push("/");
    }
  }, [me]);
  return (
    <LoginWrapper>
      <CancelWrap>
        <Link href="/">
          <a>
            <CloseOutlined style={{ fontSize: "1.2rem" }} />
          </a>
        </Link>
      </CancelWrap>
      <TopWrap>
        <Link href="/">
          <LogoWrap>
            <a>
              <img
                src="/logoCenterBlue.jpg"
                width="100px"
                height="50px"
                alt="logo"
              />
            </a>
          </LogoWrap>
        </Link>
      </TopWrap>
      <IntroWrap>
        <TopIntroWrap>기술면접 준비는 테크인터뷰!</TopIntroWrap>
        <BottomIntroWrap style={{ lineHeight: "1.8rem" }}>
          테크인터뷰는 기술면접에 필요한 포스트들 중 <br />
          엄선된 포스트만 선별해서 제공하는 서비스 입니다.
        </BottomIntroWrap>
      </IntroWrap>
      <LoginContent>
        <Form onSubmit={onSubmitLogin}>
          <IdWrapper>
            <Label htmlFor="user-email">이메일</Label>
            <UserInput
              type="text"
              name="user-email"
              required
              value={email}
              placeholder="이메일을 입력해 주세요."
              onChange={setEmail}
              ref={emailInput}
              font-family={"Noto Sans KR"}
            />
          </IdWrapper>
          <PasswordWrapper>
            <Label htmlFor="user-password">비밀번호</Label>
            <UserInput
              type="password"
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
          <IntroSignUpWrapper>
            <span>
              아직 회원이 아니신가요?{" "}
              <Link href="/signup">
                <a>
                  <span>회원가입</span>
                </a>
              </Link>
            </span>
          </IntroSignUpWrapper>
        </Form>
      </LoginContent>
    </LoginWrapper>
  );
};

export default Login;
