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
