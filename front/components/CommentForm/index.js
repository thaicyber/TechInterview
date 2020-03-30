import React, { useState, useCallback } from "react";
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
  const [text, setText] = useState("");
  const onChangeText = e => {
    setText(e.target.value);
  };
  const onSubmitComment = useCallback(
    e => {
      e.preventDefault();
      console.log(text);
      setText("");
    },
    [text]
  );
  return (
    <CommentFormWrapper onSubmit={onSubmitComment}>
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
            onChange={onChangeText}
            value={text}
          ></Input.TextArea>
        </FormWrap>
        <BtnWrap>
          <ImgUploadIconWrap>
            <FileImageOutlined
              style={{ color: Theme.themeColor, fontSize: "1.3rem" }}
            />
          </ImgUploadIconWrap>
          <SubmitBtnWrap>
            <Button
              type="primary"
              style={{ cursor: "pointer" }}
              htmlType="submit"
            >
              등록
            </Button>
          </SubmitBtnWrap>
        </BtnWrap>
      </InputWrap>
    </CommentFormWrapper>
  );
};
export default CommentForm;
