import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* &:nth-child(1) {
    flex-shrink: 0;
    width: 40px;
  }
  &:nth-child(2) {
    flex-grow: 1;
  }
  &:nth-child(3) {
    width: 370px;
  } */
`;

export const Logo = styled.div`
  flex-shrink: 0;
  width: 40px;
  background-color: blue;
`;
