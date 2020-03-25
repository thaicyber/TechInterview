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
  grid-template-rows: 7vh 50vh auto;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const TopContent = styled.div`
  display: grid;
  grid-template-columns: 8fr 2fr;
  width: 100%;
  height: 100%;
  background-color: white;
  border-bottom: 1px solid lightgray;
  padding-left: 1rem;
`;

export const BottomContent = styled.div`
  display: grid;
  grid-template-rows: 0.6fr 0.2fr 0.3fr 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
  background-color: white;
  padding-left: 1rem;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
`;
export const CancelWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const AvatarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const NicknameWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;
export const Nickname = styled.span`
  font-size: 0.9rem;
  font-weight: 900;
`;

export const FollowerWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const LogOutWrap = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
