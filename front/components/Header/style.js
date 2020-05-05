import styled from "styled-components";
import Theme from "../../styles/Theme";
import { device } from "../../styles/device";

export const HeaderContentWrapper = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.isLogin ? "7.4fr 1.2fr 1.4fr" : "5.7fr 1.2fr 3fr"};
  position: fixed;
  z-index: 1;
  width: 95%;
  top: 0;
  padding-right: 1rem;
  background-color: white;
  height: 4rem;
  @media ${device.mobileL} {
    padding-right: 0rem;
    grid-template-columns: ${props =>
      props.isLogin ? "7.8fr 1.2fr 1fr" : "6fr 1.5fr 2.5fr"};
  }
  @media ${device.tablet} {
    padding-right: 0rem;
    grid-template-columns: ${props =>
      props.isLogin ? "8.5fr 1fr 0.5fr" : "7.7fr 0.8fr 1.5fr"};
    width: 97%;
  }
  @media ${device.laptop} {
    width: 87.5%;
    grid-template-columns: ${props =>
      props.isLogin ? "8.9fr 0.6fr 0.5fr" : "8.4fr 0.6fr 1fr"};
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
  font-size: 1rem;
  color: white;
  border-radius: 1rem;
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
