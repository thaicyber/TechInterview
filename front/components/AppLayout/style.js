import styled from "styled-components";
import { device } from "../../styles/device";

export const AppLayoutWrapper = styled.div`
  padding: 0 1rem;

  @media ${device.laptop} {
    padding: 0 5rem;
  }
`;

export const AppLayoutSmallViewWrapper = styled.div`
  padding: 0 1rem;

  @media ${device.laptop} {
    padding: 0 16rem;
  }
`;

export const Wrap = styled.main`
  margin-top: ${props => (props.isLogined ? "73px" : "4rem;")};
  margin-bottom: 7vh;
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(310px, auto));
  @media ${device.mobileL} {
    grid-template-columns: repeat(auto-fill, minmax(330px, auto));
  }
  @media ${device.tablet} {
    grid-gap: 2.5rem;
  }

  @media ${device.laptop} {
    margin-top: 51px;
    margin-top: 85px;
  }
`;

export const MainContentWrapper = styled.main`
  margin-top: 73px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, auto));
  @media ${device.mobileL} {
    grid-template-columns: repeat(auto-fill, minmax(330px, auto));
    grid-gap: 1.5rem;
  }
  @media ${device.tablet} {
    grid-gap: 2.5rem;
    margin-top: 85px;
  }
`;

export const MainContentNoneGridWrapper = styled.main`
  margin-top: 73px;
`;

export const TopWrapper = styled.div`
  @media ${device.mobileL} {
    padding: 0 4rem;
  }
  @media ${device.tablet} {
    padding: 0 10rem;
  }
  @media ${device.laptop} {
    padding: 0 14rem;
  }
`;
