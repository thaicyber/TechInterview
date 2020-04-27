import styled, { css } from "styled-components";

export const PostCardWrapper = styled.div`
  width: 100%;
  background-color: white;
  /* background-color: #e6ecf0; */
  border-bottom: 1px solid #cdd6dd;

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

export const PrimeWrap = styled.div`
  display: grid;
  grid-template-columns: 16% auto;
  width: 100%;
  min-height: 41vh;
  padding: 1rem 1rem 0rem 1rem;
  margin-bottom: 0.1rem;
`;

export const AvatarWrap = styled.div`
  display: grid;
  grid-template-rows: 15% 85%;
  display: flex;
  justify-content: center;
`;

export const WriterInfoWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const WriterName = styled.span`
  width: 30%;
  font-size: 1rem;
  font-weight: 900;
`;

export const WriteDate = styled.div`
  width: 70%;
  background-color: white;
`;

export const ContentWrap = styled.div`
  display: grid;
  grid-template-rows: 15% 68% 8% 10%;
`;
// title , img & content , hastag , nav 순서

export const CardWrap = styled.div`
  display: grid;
  grid-template-rows: 70% 15% 15%;
  width: 100%;
  height: 100%;
  border: 1px solid #cdd6dd;
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
`;

export const CardTitle = styled.span``;

export const CardLinkWrap = styled(Wrap)`
  display: flex;
  align-items: flex-start;
  padding-left: 0.6rem;
`;

export const CardLink = styled.span``;

export const HashTagWrap = styled(Wrap)`
  display: flex;
  align-items: center;
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
