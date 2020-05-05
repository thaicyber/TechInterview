import styled from "styled-components";
import { device } from "../../styles/device";

export const AppLayoutWrapper = styled.div`
  padding : 0 1rem;


  @media ${device.laptop} {
    padding : 0 5rem;
  }
  /* @media (min-width: 600px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 600px;
    justify-content: center;
    /* padding-left: 1rem; */
    /* padding-right: 1rem; */
  /* } */

  /* @media ${device.laptop} {
    display: grid;
    grid-template-columns: 40rem 22rem;
    /* padding-left: 1rem; */
    /* padding-right: 1rem; */
    /* justify-content: center; */
  /* } */
  /* @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: 40rem 22rem;
    /* padding-left: 1rem; */
  /* padding-right: 1rem; */
  /* justify-content: center; */
  /* } */
  /* @media (min-width: 1240px) {
    display: grid;
    grid-template-columns: 600px 350px;
    /* padding-left: 150px; */
  /* padding-right: 150px; */
  /* }  */
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
  }
  @media ${device.tablet} {
    grid-gap: 2.5rem;
    margin-top: 85px;
  }
`;
