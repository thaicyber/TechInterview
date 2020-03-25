import styled from "styled-components";

export const PostCardWrapper = styled.div`
  width: 100%;
  /* padding: 1rem 1rem; */

  margin-top: ${props => (props.isLogined ? "73px" : "113px")};
  background-color: #e6ecf0;

  @media (min-width: 600px) and (max-width: 1024px) {
    margin-top: 55px;
  }

  @media (min-width: 1025px) {
    margin-top: 40px;
  }

  @media (min-width: 1240px) {
    margin-top: 63px;
  }
`;

export const Content = styled.div`
  width: 100%;
  background-color: white;
  min-height: 41vh;
  padding: 1rem 1rem;
  margin-bottom: 0.1rem;
`;
