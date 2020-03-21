import styled from "styled-components";

export const FooterWrapper = styled.footer`
  /* mobile */
  display: none;

  @media (min-width: 1025px) {
    display: block;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    text-align: center;
    position: fixed;
    right: 150px;
    left: 60%;
    bottom: 150px;
  }

  @media (min-width: 1240px) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    text-align: center;
  }
`;
