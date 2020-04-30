import styled from "styled-components";
import { Input } from "antd";
const { Search } = Input;
import { Form } from "antd";
import { device } from "../../../styles/device";

export const AtdForm = styled(Form)`
  width: 100%;
  display: flex;

  @media ${device.tablet} {
    width: 600px;
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
  grid-template-columns: 9.2fr 0.8fr;
`;

export const SearchBarLogoWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 16% auto;

  @media ${device.tablet} {
    width: 600px;
  }
`;

export const AvatarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
