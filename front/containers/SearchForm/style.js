import styled from "styled-components";
import { device } from "../../styles/device";

export const SearchResultCountWrap = styled.div`
  margin-top: 1rem;
`;
export const SearchContentWrap = styled.div`
  margin-top: 90px;
  @media ${device.tablet} {
    padding: 0 3rem;
  }
`;
