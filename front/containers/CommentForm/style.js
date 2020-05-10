import styled from "styled-components";
import { device } from "../../styles/device";
export const CommentFormWrapper = styled.form`
  display: grid;
  width: 100%;
  padding: 1rem 0rem 0rem 0rem;
  min-height: 30vh;
  margin-bottom: 0.1rem;
  z-index: 0;

  @media ${device.tablet} {
  }
`;
export const UserImgWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const InputWrap = styled.div`
  display: grid;
  grid-template-rows: 70% auto;
  grid-auto-columns: 100%;
`;
export const FormWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: yellow;
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ImgUploadIconWrap = styled.div``;
export const SubmitBtnWrap = styled.div``;
