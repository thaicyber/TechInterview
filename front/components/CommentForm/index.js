import React from "react";
import {
  CommentFormWrapper,
  UserImgWrap,
  InputWrap,
  FormWrap,
  BtnWrap,
  ImgUploadIconWrap,
  SubmitBtnWrap
} from "./style";
import Avatar from "../Util/Avatar";
import { Input, Button } from "antd";
import { FileImageOutlined } from "@ant-design/icons";
import Theme from "../../styles/Theme";
const CommentForm = () => {
  return (
    <CommentFormWrapper>
      <UserImgWrap>
        <Avatar size="large" />
      </UserImgWrap>
      <InputWrap>
        <FormWrap>
          <Input.TextArea
            style={{
              width: "100%",
              height: "100%",
              border: "1px solid lightgrey"
            }}
          ></Input.TextArea>
        </FormWrap>
        <BtnWrap>
          <ImgUploadIconWrap>
            <FileImageOutlined
              style={{ color: Theme.themeColor, fontSize: "1.6rem" }}
            />
          </ImgUploadIconWrap>
          <SubmitBtnWrap>
            <Button type="primary">등록</Button>
          </SubmitBtnWrap>
        </BtnWrap>
      </InputWrap>
    </CommentFormWrapper>
  );
};
export default CommentForm;
