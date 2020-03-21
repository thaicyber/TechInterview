import styled from "styled-components";

export const LogInOutBtnWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media (min-width: 600px) and (max-width: 1024px) {
    display: flex;
    padding: 0 25%;
    justify-content: center;
  }

  @media (min-width: 1025px) {
    margin-left: 0px;
    display: flex;
    width: 30%;
  }

  @media (min-width: 1240px) {
    margin-left: 0px;
  }
`;

export const Button = styled.button`
  width: 40%;
  background-color: aquamarine;
`;
