import styled from "styled-components";
import Theme from "../../styles/Theme";

export const SimpleHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 73px;
  padding: 0 1rem;
  background-color: white;
  position: fixed;
  width: 100%;
  top: 0;
  border-bottom: 1px solid lightgray;
`;

export const BackBtnWrap = styled.div`
  cursor: pointer;
  width: 35px;
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
`;

export const TitleWrap = styled.div`
  margin-left: 1rem;
`;
export const Title = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`;
