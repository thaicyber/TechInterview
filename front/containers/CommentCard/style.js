import styled, { css } from "styled-components";
import Theme from "../../styles/Theme";
import { device } from "../../styles/device";

export const CommentCardWrapper = styled.div`
  padding: 1rem 0rem 1rem 0rem;
  border-bottom: 1px solid lightgray;
  min-height: 10rem;
`;
export const CommentCardContentWrap = styled.div`
  display: grid;
  grid-template-columns: 16% 74% 10%;

  @media ${device.mobileL} {
    grid-template-columns: 10% 80% 10%;
  }
  @media ${device.tablet} {
    grid-template-columns: 7% 83% 10%;
  }
`;
export const CommentContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 5fr 5fr;

  @media ${device.mobileL} {
    margin-left: 0.5rem;
  }
  @media ${device.tablet} {
    margin-left: 0.7rem;
  }
`;
export const CommentContentWrap = styled.p`
  font-size: 1rem;
  line-height: 1.8rem;
`;
export const Options = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const AvatarWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const CommentInfoWrap = styled.div``;
export const CommentAuthorWrap = styled.div`
  margin-right: 1rem;
  margin-top: 0.4rem;
`;
export const CommentCreatedWrap = styled.div`
  width: 100%;
  display: flex;
`;
export const Author = styled.span`
  font-weight: 600;
`;
export const CreatedTime = styled.span`
  font-size: 0.8rem;
  font-weight: 300;
`;
export const ContentWrap = styled.div`
  padding: 1rem 0.4rem;
`;

export const EditCommentWraper = styled.div`
  z-index: 1;
  display: grid;
  grid-template-rows: 78% 22%;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
`;

export const TopWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.4);
  margin-left: -1rem;

  @media ${device.laptop} {
    margin-left: 0rem;
    width: 0%;
    height: 0%;
  }
`;
export const BottomWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
  bottom: -1px;
  padding: 0.8rem;
  margin-left: -1rem;

  @media ${device.laptop} {
    width: 30%;
    height: 30%;
    margin-left: 0rem;
    position: fixed;
    bottom: 43%;
    left: 36%;
    border: 1px solid lightgray;
    border-radius: 10px;
  }
`;
const BtnWrapStyles = css`
  width: 100%;
  height: 33%;
  display: flex;
  align-items: center;
`;
export const CancelBtnWrap = styled.div`
  ${BtnWrapStyles}
  justify-content: center;
  background-color: ${Theme.cancelColor};
  border-radius: 50px;
`;
export const CancelBtn = styled.div``;

export const DeleteBtnWrap = styled.div`
  ${BtnWrapStyles}
  justify-content: flex-start;
`;
export const DeleteBtn = styled.div`
  display: flex;
`;
export const EditBtnWrap = styled.div`
  ${BtnWrapStyles}
  justify-content: flex-start;
`;
export const EditBtn = styled.div`
  display: flex;
`;

export const IconTitleWrap = styled.div`
  margin-left: 0.4rem;
`;
export const IconTitle = styled.span``;

export const DeleteMsgWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.4);

  @media ${device.laptop} {
    margin-left: -18rem;
  }
`;

export const MsgWrap = styled.div`
  position: absolute;
  background-color: white;
  width: 280px;
  height: 220px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnWrap = styled.div`
  display: flex;
  width: 280px;
  padding: 0.8rem;
  position: relative;
  top: 65px;
`;
export const DeleteCancelBtn = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${Theme.cancelColor};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 30px;
  margin-right: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DeleteRequestBtn = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${Theme.deleteColor};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConfirmMessage = styled.span`
  color: black;
`;
export const BtnMessage = styled.span``;
