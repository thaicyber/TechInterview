import styled from "styled-components";
import Theme from "../../styles/Theme";

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 6.8fr 1.2fr 2fr;
  position: fixed;
  z-index: 1;
  width: 100%;
  padding: 0 1rem;
  top: 0;
  background-color: white;
  border-bottom: 1px solid lightgray;
  height: 4rem;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Title = styled.span`
  margin: 0.5rem 0;
`;

export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
