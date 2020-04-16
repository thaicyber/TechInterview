import styled from "styled-components";

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
export const CommentInfoWrap = styled.div`
  display: flex;
`;
export const CommentAuthorWrap = styled.div`
  margin-right: 1rem;
`;
export const CommentCreatedWrap = styled.div``;
export const Author = styled.span`
  font-weight: 900;
`;
export const CreatedTime = styled.span``;
export const ContentWrap = styled.span``;

export const EditCommentWraper = styled.div`
  z-index: 1;
  display: grid;
  grid-template-rows: 75% 25%;
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
`;

export const CancelBtnWrap = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CancelBtn = styled.div``;

export const DeleteBtnWrap = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const DeleteBtn = styled.div``;
export const EditBtnWrap = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const EditBtn = styled.div``;
