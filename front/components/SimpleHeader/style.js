import styled from "styled-components";
import Theme from "../../styles/Theme";
import { device } from "../../styles/device";

export const SimpleHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 73px;
  background-color: white;
  position: fixed;
  width: 100%;
  top: 0;
  border-bottom: 1px solid lightgray;
  z-index: 1;
  padding: 0rem 1rem;
  @media ${device.tablet} {
    padding: ${props => (props.isExtend ? "0" : "0% 20")};
  }
  @media ${device.laptop} {
    padding: ${props => (props.isExtend ? "0% 6%" : "0% 25")};
  }
  @media ${device.laptopL} {
    padding: ${props => (props.isExtend ? "0% 11%" : "0% 30")};
  }
  @media ${device.desktopS} {
    padding: ${props => (props.isExtend ? "0% 15%" : "0% 35")};
  }
`;

export const BackBtnWrap = styled.div`
  cursor: pointer;
  width: 47px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${Theme.hoverColor};
  }
  &:active {
    background-color: ${Theme.hoverColor};
  }
  @media ${device.tablet} {
    height: 37px;
  }
  @media ${device.tablet} {
    height: 37px;
  }
  @media ${device.laptop} {
    height: 40px;
  }
`;

export const TitleWrap = styled.div`
  margin-left: 1rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const Title = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`;
