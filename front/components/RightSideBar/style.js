import styled from "styled-components";

export const RightSideBarWrapper = styled.div`
  display: none;
  min-height: 400px;
  background-color: green;

  @media (min-width: 1025px) {
    display: block;
    position: fixed;
    right: 150px;
    top: 55px;
    left: 60%;
  }
`;
