import styled from "styled-components";
import { Icon } from "antd";

export const UserSettingWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 75%;
`;

export const UserSettingContent = styled.div`
  display: grid;
  grid-template-rows: 7vh 93vh;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const TopContent = styled.div`
  display: grid;
  grid-template-columns: 8fr 2fr;
  width: 100%;
  height: 100%;
  background-color: lightgrey;
`;

export const BottomContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const Title = styled.span``;
export const CancelWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
