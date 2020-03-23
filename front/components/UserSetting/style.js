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
`;

export const BottomContent = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const Title = styled.span`
  font-size: 1.2rem;
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
  margin-left: 1rem;
`;

export const AvatarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 0.7rem;
`;
export const Avatar = styled.figure`
  width: 13%;
  border-radius: 50%;
  height: 4.2vh;
  margin-bottom: 0.5rem;
  background-color: lightgray;
  background-image: url("https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

export const NicknameWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin-left: 0.7rem;
`;
export const Nickname = styled.span`
  font-size: 1.1rem;
  font-weight: 800;
`;
