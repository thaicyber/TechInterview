import styled from "styled-components";
import { Input } from "antd";
const { Search } = Input;
import { Form } from "antd";

export const AtdForm = styled(Form)`
  width: 100%;
  display: flex;

  @media (min-width: 600px) and (max-width: 1024px) {
    width: 500px;
    margin-left: 0px;
  }
  @media (min-width: 1025px) {
    width: 500px;
    margin-left: 0px;
  }

  @media (min-width: 1240px) {
    width: 520px;
    margin-left: 0px;
  }
`;

export const AtdInput = styled(Search)`
  width: ${props => (props.isLogin ? "85%" : "100%")};
  margin-bottom: 0.5rem;
  margin-left: ${props => (props.isLogin ? "auto" : null)};
`;

export const Avatar = styled.figure`
  display: inline-block;
  width: 10%;
  border-radius: 50%;
  height: 4vh;
  margin-bottom: 0.5rem;
  background-color: lightgray;
  background-image: url("https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;
