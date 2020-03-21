import styled from "styled-components";

export const SearchBarFormWrapper = styled.div`
  width: 80%;
  margin-left: auto;

  @media (min-width: 600px) and (max-width: 1024px) {
    width: 500px;
    margin-left: 0px;
  }
  @media (min-width: 1025px) {
    width: 500px;
    margin-left: 0px;
  }

  @media (min-width: 1240px) {
    width: 520px;
    margin-left: 0px;
  }
`;

export const SearchBarInput = styled.input`
  width: 40%;
  background-color: gold;
`;
