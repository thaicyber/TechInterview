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
  @media ${device.laptop} {
    padding: 0% 6%;
  }
  @media ${device.laptopL} {
    padding: 0% 11%;
  }
  @media (min-width: "1600px") {
    padding: 0% 12%;
  }
  @media ${device.desktopS} {
    padding: 0% 15%;
  }
`;
