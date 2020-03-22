import styled from "styled-components";

export const RightSideBarWrapper = styled.div`
  display: none;
  min-height: 400px;
  background-color: green;
  border: 1px solid #3d3d3d;

  @media (min-width: 1025px) {
    display: block;
    position: fixed;
    right: 150px;
    top: 78px;
    left: 60%;
  }
`;
