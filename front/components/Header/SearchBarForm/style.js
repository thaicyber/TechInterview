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

export const SearchBarWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 8.8fr 0.2fr 1fr;
`;
