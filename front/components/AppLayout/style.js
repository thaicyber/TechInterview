import styled from "styled-components";
import { device } from "../../styles/device";

export const AppLayoutWrapper = styled.div`
  padding: 0 1rem;
`;

// pc인 경우, 가운데 컨텐츠를 보여주는 wrapper
// padding 값을 통해 메인 컨텐츠 화면크기를 small으로
export const AppLayoutSmallViewWrapper = styled.div`
  padding: 0rem 1rem;
`;
// padding 값을 통해 메인 컨텐츠 화면크기를 medium으로
export const AppLayoutMediumViewWrapper = styled.div`
  padding: 0rem 1rem;
`;

// 메인 컨텐츠를 담아서 보여주는 wrapper
export const MainContentWrapper = styled.main`
  margin-top: ${props => (props.isSearch ? "0px" : "4.56rem")};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, auto));
  @media ${device.mobileM} {
    grid-template-columns: repeat(auto-fill, minmax(310px, auto));
  }
  @media ${device.mobileL} {
    grid-template-columns: repeat(auto-fill, minmax(330px, auto));
    grid-gap: 1.5rem;
  }
  @media ${device.tablet} {
    grid-gap: 2.5rem;
    margin-top: 5.31rem;
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

// 메인 컨텐츠를 보여주는 곳이 grid를 원하지 않을 때 사용하는 wrapper
export const MainContentNoneGridWrapper = styled.main`
  margin-top: 4.56rem;
  @media ${device.tablet} {
    padding: 0% 20%;
  }
  @media ${device.laptop} {
    padding: 0% 25%;
  }
  @media ${device.laptopL} {
    padding: 0% 30%;
  }
  @media ${device.desktopS} {
    padding: 0% 35%;
  }
`;
