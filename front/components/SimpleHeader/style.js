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
  padding: 0 1rem;
  @media ${device.tablet} {
  }

  @media ${device.laptop} {
    padding: 0 5rem;
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
