import styled from "styled-components";

export const NoneMemberLayoutWrapper = styled.div`
  @media (min-width: 600px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 600px;
    justify-content: center;
    padding: 0 1rem;
  }

  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: 600px 350px;
    padding: 0 1rem;
    justify-content: center;
  }

  @media (min-width: 1240px) {
    display: grid;
    grid-template-columns: 600px 350px;
    padding: 0 150px;
  }
`;
