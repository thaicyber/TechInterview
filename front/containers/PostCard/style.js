import styled, { css } from "styled-components";
import { device } from "../../styles/device";
export const PostCardWrapper = styled.div`
  width: 100%;
  background-color: white;
  cursor: pointer;
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
  }
`;

export const PrimeWrap = styled.div`
  display: grid;
  grid-template-rows: 13% 66% 11% 10%;
  grid-auto-columns: 100%;
  width: 100%;
  /* min-height: 63vh; vh 사용금지 */
  min-height: 480px;
  margin-bottom: 0.1rem;

  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
  }
`;

export const AvatarWrap = styled.div`
  margin-top: 0.5rem;
`;

export const WriterInfoWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const WriterName = styled.span`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 500;
  margin-left: 0.6rem;
`;

export const WriteDate = styled.div`
  background-color: white;
  min-width: 7rem;
  display: flex;
  justify-content: flex-end;

  & > span {
    font-size: 0.8rem;
    color: rgb(0, 0, 0, 0.5);
  }
`;

export const ContentWrap = styled.div`
  display: grid;
  grid-template-rows: 13% 66% 11% 10%;
  grid-auto-columns: 100%;
`;
// title , img & content , hastag , nav 순서

export const CardWrap = styled.div`
  display: grid;
  grid-template-rows: 49% 14% 27% 10%;
  grid-auto-columns: 100%;
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;
export const CardImageWrap = styled(Wrap)``;

export const CardImage = styled.figure`
  background-color: ${props => (props.img ? "none" : "lightgray")};
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  height: 100%;
`;

export const CardTitleWrap = styled(Wrap)`
  display: flex;
  align-items: flex-end;
  padding-left: 0.6rem;
  border-left: 1px solid #cdd6dd;
  border-right: 1px solid #cdd6dd;

  @media ${device.tablet} {
    padding-top: 0.4rem;
    padding-bottom: 0.5rem;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.1rem;
`;

export const CardLinkWrap = styled(Wrap)`
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  padding-left: 0.6rem;
  border-left: 1px solid #cdd6dd;
  border-bottom: 1px solid #cdd6dd;
  border-right: 1px solid #cdd6dd;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  @media ${device.tablet} {
    padding-top: 0.5rem;
    padding-bottom: 0.4rem;
  }
`;

export const CardLink = styled.span`
  font-weight: 400;
`;

export const HashTagWrap = styled(Wrap)`
  padding-top: 0.8rem;
  display: flex;
  align-items: center;
  padding-top: 0.3rem;
`;

export const HashTag = styled.span`
  line-height: 1.5rem;
`;

export const MenuWrap = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
`;
const MenuWrapStyles = css`
  height: 100%;
  display: grid;
  grid-template-columns: 25% 20%;

  @media ${device.mobileL} {
    grid-template-columns: 18% 14%;
  }
  @media ${device.tablet} {
    grid-template-columns: 14% 8%;
  }
`;
export const CommentWrap = styled.div`
  ${MenuWrapStyles}
`;

export const LikeWrap = styled.div`
  ${MenuWrapStyles}
`;

export const ShareWrap = styled.div``;

export const PinWrap = styled.div``;
export const CountWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.2rem;

  @media ${device.laptop} {
    margin-left: 0.9rem;
  }
`;
export const Count = styled.a`
  text-decoration: none;
  font-size: 1.1rem;
  margin-bottom: 0.1rem;
  &:link {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
`;
export const IconWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  background-color: #cdd6dd;
  width: 100%;
  height: 1px;

  @media ${device.tablet} {
    margin-left: 2.4rem;
    width: 91%;
  }
`;

export const CardContentWrap = styled.div`
  border-left: 1px solid #cdd6dd;
  border-right: 1px solid #cdd6dd;
  display: flex;
  align-items: center;
`;
export const CardContent = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2rem;
  font-size: 0.9rem;
  font-weight: 300;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  @media ${device.mobileS} {
    height: 3.6rem;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
  @media ${device.laptopL} {
  }
  @media ${device.desktopS} {
  }
`;

export const hashTagContent = styled.a`
  font-size: 1.3rem;
  &:link {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
`;
