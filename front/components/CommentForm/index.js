import React from "react";
import {
  CommentFormWrapper,
  UserImgWrap,
  InputWrap,
  FormWrap,
  BtnWrap
} from "./style";
import Avatar from "../Util/Avatar";
const CommentForm = () => {
  return (
    <CommentFormWrapper>
      <UserImgWrap>
        <Avatar size="large" />
      </UserImgWrap>
      <InputWrap>
        <FormWrap>FormWrap</FormWrap>
        <BtnWrap>BtnWrap</BtnWrap>
      </InputWrap>
    </CommentFormWrapper>
  );
};
export default CommentForm;
