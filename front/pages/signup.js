import React, { useCallback, useState } from "react";
import NoneMemberLayout from "../containers/NoneMemberLayout";
import styled from "styled-components";
import { Form, Input } from "antd";

const SignupWrapper = styled.div`
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
`;
const SignupContent = styled.div`
  border-radius: 1rem;
  background-color: white;
  min-height: 85%;
  min-width: 45%;
  padding: 10px;
  margin: 0 10rem;
`;
const Label = styled.label``;
const IdWrapper = styled.div``;
const signup = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const onChangeNickname = useCallback(() => {}, [nickname]);
  const onChangeEmail = useCallback(() => {}, [email]);
  return (
    <>
      <SignupWrapper>
        <SignupContent>
          <Form>
            <IdWrapper>
              <Label htmlFor="user-nickname">닉네임</Label>
              <Input
                name="user-nickname"
                required
                onChange={onChangeNickname}
                placeholder=""
              />
            </IdWrapper>
            <IdWrapper>
              <Label htmlFor="user-Email">이메일</Label>
              <Input name="user-Email" required onChange={onChangeEmail} />
            </IdWrapper>
          </Form>
        </SignupContent>
      </SignupWrapper>
    </>
  );
};

export default signup;
