import styled, { css } from "styled-components";
import Theme from "../../styles/Theme";

export const CommentCardWrapper = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  border-bottom: 1px solid lightgray;
  min-height: 70px;
`;
export const CommentCardContentWrap = styled.div`
  display: grid;
  grid-template-columns: 16% 74% 10%;
`;
export const CommentContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 3fr 7fr;
`;
export const CommentContentWrap = styled.span``;
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
export const CommentInfoWrap = styled.div`
  display: flex;
`;
export const CommentAuthorWrap = styled.div`
  margin-right: 1rem;
`;
export const CommentCreatedWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const Author = styled.span`
  font-weight: 900;
`;
export const CreatedTime = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
`;
export const ContentWrap = styled.span``;

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
`;
export const BottomWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
  bottom: -1px;
  padding: 0.8rem;
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
