import styled, { css } from "styled-components";
import { device } from "../../styles/device";

export const PostCardWrapper = styled.div`
  width: 100%;
  background-color: white;
  /* background-color: #e6ecf0; */
  /* border-bottom: 1px solid #cdd6dd; */

  @media ${device.tablet} {
    display: flex;
    justify-content: center;
  }
`;

export const PrimeWrap = styled.div`
  display: grid;
  grid-template-columns: 16% auto;
  width: 100%;
  min-height: 52vh;
  padding: 1rem 1rem 0rem 1rem;
  margin-bottom: 0.1rem;

  @media ${device.mobileL} {
    display: grid;
    grid-template-columns: 16% auto;
    width: 100%;
    min-height: 62vh;
    padding: 1rem 1rem 0rem 1rem;
    margin-bottom: 0.1rem;
  }
  @media ${device.tablet} {
    min-height: 62vh;
  }

  @media ${device.tablet} {
    min-height: 72vh;
  }

  @media ${device.laptop} {
    min-height: 77vh;
    width: 80%;
  }
`;

export const AvatarWrap = styled.div`
  display: grid;
  grid-template-rows: 15% 85%;
  justify-content: center;
  margin-top: 0.5rem;
  /* @media ${device.tablet} {
    margin-top: 0.6rem;
  }
  @media ${device.laptop} {
    margin-top: 0.6rem;
  } */
`;

export const WriterInfoWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const WriterName = styled.span`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const WriteDate = styled.div`
  background-color: white;
  width: 240px;
  display: flex;
  justify-content: flex-end;

  & > span {
    font-size: 0.8rem;
    color: rgb(0, 0, 0, 0.5);
  }
`;

export const ContentWrap = styled.div`
  display: grid;
  grid-template-rows: 15% 69% 8% 8%;
  /* border-bottom: 1px solid #cdd6dd; */

  @media ${device.tablet} {
    /* grid-template-rows: 12% 68% 8% 10%; */
  }
  @media ${device.laptop} {
    /* grid-template-rows: 10% 68% 8% 10%; */
  }
`;
// title , img & content , hastag , nav 순서

export const CardWrap = styled.div`
  display: grid;
  grid-template-rows: 45% 10% 35% 10%;
  width: 100%;
  height: 100%;
  /* border: 1px solid #cdd6dd; */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  @media ${device.tablet} {
    grid-template-rows: 50% 10% 30% 10%;
  }
  @media ${device.laptop} {
    /* grid-template-rows: 70% 13% 13%; */
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;
export const CardImageWrap = styled(Wrap)``;

export const CardImage = styled.figure`
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
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;

  @media ${device.tablet} {
    padding-top: 0.4rem;
    padding-bottom: 0.5rem;
  }
`;

export const CardTitle = styled.span`
  font-weight: 400;
  font-size: 0.9rem;
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

  /* @media ${device.tablet} {
    padding-top: 1rem;
  } */
`;

export const HashTag = styled.span``;

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
    margin-left: 0.4rem;
  }
`;
export const Count = styled.a`
  text-decoration: none;
  font-size: 0.8rem;
  margin-bottom: 0.1rem;
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
export const CardContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2rem;
  height: 6rem;
  font-size: 0.9rem;
  font-weight: 300;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
`;
