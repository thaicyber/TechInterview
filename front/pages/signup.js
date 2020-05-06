import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Form, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  SIGN_UP_REQUEST,
  SIGN_UP_FAILURE_RESET,
  LOG_IN_REQUEST
} from "../reducers/user";
import Theme from "../styles/Theme";
import { device } from "../styles/device";
import Router from "next/router";
import Link from "next/link";
import { isMobile } from "../components/Util/meta";
const SignupWrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 9% 28% 63%;

  @media ${device.tablet} {
    width: 50%;
    margin: 0 auto;
  }
  @media ${device.laptop} {
    width: 35%;
    margin: 0 auto;
  }
`;
const SignupContent = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`;
const Label = styled.label`
  margin-left: 0.2rem;
`;
const IdWrapper = styled.div`
  margin-bottom: 1rem;
`;
const EmailWrapper = styled.div`
  margin-bottom: 1rem;
`;
const PasswordWrapper = styled.div`
  margin-bottom: 1rem;
`;
const BtnWrapper = styled.div``;
const AtdButton = styled(Button)`
  width: 100%;
  height: 3.1rem;
`;

const NotificationWrapper = styled.div`
  width: 100%;
`;
const NotificationContent = styled.span`
  color: red;
`;

const TopWrap = styled.div`
  display: flex;
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
const Signup = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();
  const { isSigningUp, me, signUpErrorReason, isSignedUp } = useSelector(
    state => state.user
  );
  const nicknameInput = useRef();
  useEffect(() => {
    if (signUpErrorReason) {
      alert("이미 존재하는 이메일 주소 입니다. 다시 입력해 주세요.");
      dispatch({
        type: SIGN_UP_FAILURE_RESET
      });
    }
  }, [signUpErrorReason]);
  useEffect(() => {
    if (!isMobile()) {
      nicknameInput.current.focus();
    }
  }, []);
  useEffect(() => {
    if (me) {
      dispatch({
        type: LOG_IN_REQUEST,
        data: {
          userId: email,
          password
        }
      });
      Router.push("/");
    }
  }, [me]);
  const onSubmitSignup = async e => {
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
        password,
        img:
          "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
        level: "company"
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
  const onChangeNickname = e => {
    if (e.target.value.length > 15) {
      return;
    }
    setNickname(e.target.value);
  };
  if (me) {
    return null;
  }
  return (
    <SignupWrapper>
      <TopWrap>
        <Link href="/">
          <LogoWrap>
            <a>
              <img src="/logoCenterBlue.jpg" width="100px" height="50px" />
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
      <SignupContent>
        <Form onSubmit={onSubmitSignup}>
          <IdWrapper>
            <Label htmlFor="user-nickname">닉네임</Label>
            <UserInput
              type="text"
              name="user-nickname"
              required
              onChange={onChangeNickname}
              placeholder="닉네임을 입력해 주세요."
              value={nickname}
              ref={nicknameInput}
            />
          </IdWrapper>
          <EmailWrapper>
            <Label htmlFor="user-Email">이메일</Label>
            <UserInput
              type="text"
              name="user-Email"
              required
              onChange={onChangeEmail}
              placeholder="이메일을 입력해 주세요."
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
            <UserInput
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

export default Signup;
