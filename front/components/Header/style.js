import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: fixed;
  z-index: 1;
  background-color: whitesmoke;
  width: 100%;
  padding: 0 1rem;
  top: 0;

  @media (min-width: 600px) and (max-width: 1024px) {
    justify-content: center;
  }

  @media (min-width: 1025px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
  }

  @media (min-width: 1240px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    display: flex;
    justify-content: flex-start;
  }
`;

export const Logo = styled.div`
  width: 5%;
  background-color: blue;
`;
