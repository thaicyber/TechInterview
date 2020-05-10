import styled from "styled-components";
import Theme from "../../styles/Theme";
import { device } from "../../styles/device";

export const HeaderContentWrapper = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.isLogin ? "6.9fr 1.7fr 1.4fr" : "5.7fr 1.5fr 2.7fr"};
  position: fixed;
  z-index: 1;
  top: 0;
  background-color: white;
  height: 4rem;
  @media ${device.mobileS} {
    width: calc(100% - 2rem);
  }

  @media ${device.mobileM} {
    width: calc(100% - 2rem);
    grid-template-columns: ${props =>
      props.isLogin ? "7.8fr 1.2fr 1fr" : "5.5fr 1.5fr 3fr"};
  }

  @media ${device.mobileL} {
    width: calc(100% - 2rem);
    grid-template-columns: ${props =>
      props.isLogin ? "7.8fr 1.2fr 1fr" : "6fr 1.5fr 2.5fr"};
  }
  @media ${device.tablet} {
    width: calc(100% - 2rem);
    grid-template-columns: ${props =>
      props.isLogin ? "8.5fr 1fr 0.5fr" : "7.7fr 0.8fr 1.5fr"};
  }
  @media ${device.laptop} {
    width: calc(100% - 2rem);
    grid-template-columns: ${props =>
      props.isLogin ? "8.9fr 0.6fr 0.5fr" : "8.4fr 0.6fr 1fr"};
  }
  @media ${device.laptopL} {
    width: calc(100% - 2rem);
    grid-template-columns: ${props =>
      props.isLogin ? "9fr 0.5fr 0.5fr" : "8.5fr 0.5fr 1fr"};
  }
  @media ${device.desktopS} {
    width: calc(100% - 2rem);
    grid-template-columns: ${props =>
      props.isLogin ? "9.2fr 0.4fr 0.4fr" : "8.6fr 0.4fr 1fr"};
  }
`;

export const HeaderWrapper = styled.header``;

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Title = styled.span`
  margin: 0.5rem 0;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${Theme.themeColor};
  }
`;

export const HoverWrapper = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${Theme.hoverColor};
    border-radius: 50%;
  }
`;

export const LogInWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const LogInButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${Theme.themeColor};
  font-size: 0.9rem;
  color: white;
  border-radius: 1rem;
  padding-bottom: 0.3rem;
  font-weight: 600;
  word-break: keep-all;
  cursor: pointer;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  padding-top: 0.27rem;
`;
export const AvatarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
