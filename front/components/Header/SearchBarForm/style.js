import styled from "styled-components";
import { Input } from "antd";
const { Search } = Input;
import { Form } from "antd";

export const AtdForm = styled(Form)`
  width: 80%;
  margin-left: auto;

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
  width: 100%;
`;
