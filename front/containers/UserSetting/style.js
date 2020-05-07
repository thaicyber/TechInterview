import styled from "styled-components";
import Theme from "../../styles/Theme";
import { device } from "../../styles/device";
export const BackgroundWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  z-index: 2;
  background-color: rgb(0, 0, 0, 0.4);
`;
export const UserSettingWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 75%;
  z-index: 3;

  @media ${device.mobileL} {
    width: 70%;
  }
  @media ${device.tablet} {
    width: 40%;
  }

  @media ${device.laptop} {
    width: 25%;
  }
`;

export const UserSettingContent = styled.div`
  display: grid;
  grid-template-rows: 8vh 50vh auto;
  grid-auto-columns: 100%;
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
  padding-left: 1rem;
`;

export const BottomContent = styled.div`
  display: grid;
  grid-template-rows: 0.8fr 0.8fr 0.8fr 1fr 1fr 1fr;
  grid-auto-columns: 100%;
  width: 100%;
  height: 100%;
  background-color: white;
  padding-left: 1rem;
`;

export const Title = styled.span`
  font-size: 1.3rem;
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

export const AvatarMyPageWrap = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
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
  cursor: pointer;
`;

export const LogOutWrap = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const MyPageWrap = styled.div`
  width: 5rem;
  height: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5rem;
  border: 1px solid ${Theme.themeColor};
  border-radius: 1.3rem;
`;
export const MyPage = styled.a`
  color: ${Theme.themeColor};
`;

export const LikeWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const IconWrap = styled.div``;
