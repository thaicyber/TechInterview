import styled from "styled-components";
import Theme from "../../styles/Theme";
import { device } from "../../styles/device";

export const HeaderContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 7fr 2fr 1fr;
  /* grid-template-columns: ${props =>
    props.isLogin ? "7fr 1.8fr 45px" : "6.6fr 1.4fr 75px;"} */
  position: fixed;
  z-index: 1;
  width: 95%;
  top: 0;
  padding-right : 1rem;
  background-color: white;
  height: 4rem;

  @media ${device.tablet} {
    padding-right : 0rem;
    grid-template-columns: 9fr 0.5fr 1fr;
  }
  @media ${device.laptop} {
    width: 87.5%;
    grid-template-columns: 9fr 0.5fr 0.5fr;
  }
  /* @media ${device.mobileL} {
    grid-template-columns: ${props =>
      props.isLogin ? "8.5fr 1.2fr 45px" : "8.5fr 1.2fr 75px;"}
  }

  @media ${device.tablet} {
    grid-template-columns: ${props =>
      props.isLogin ? "8fr 1.3fr 45px" : "8fr 1.3fr 75px;"}
    justify-content: center;
  }

  @media ${device.laptop} {
    grid-template-columns: ${props =>
      props.isLogin ? "8.7fr 0.3fr 45px" : "8.7fr 0.3fr 75px;"}
    grid-template-columns: 7.3fr 0.7fr 75px;
    justify-content: center;
  } */
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
