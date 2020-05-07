import styled from "styled-components";
import { device } from "../../styles/device";

export const AppLayoutWrapper = styled.div`
  padding: 0 1rem;

  @media ${device.laptop} {
    padding: 0 5rem;
  }
`;

// pc인 경우, 가운데 컨텐츠를 보여주는 wrapper
// padding 값을 통해 메인 컨텐츠 화면크기를 small으로
export const AppLayoutSmallViewWrapper = styled.div`
  padding: 0rem 1rem;

  @media ${device.laptop} {
    padding: 0rem 25rem;
  }
`;
// padding 값을 통해 메인 컨텐츠 화면크기를 medium으로
export const AppLayoutMediumViewWrapper = styled.div`
  padding: 0rem 1rem;

  @media ${device.laptop} {
    padding: 0rem 18rem;
  }
`;

// 메인 컨텐츠를 담아서 보여주는 wrapper
export const MainContentWrapper = styled.main`
  margin-top: 4.56rem;
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
`;
// 메인 컨텐츠를 보여주는 곳이 grid를 원하지 않을 때 사용하는 wrapper
export const MainContentNoneGridWrapper = styled.main`
  margin-top: 4.56rem;
`;
