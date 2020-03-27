import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import {
  SimpleHeaderWrapper,
  BackBtnWrap,
  PostTitleWrap,
  PostTitle
} from "./style";
import Theme from "../../styles/Theme";
const SimpleHeader = () => {
  const onClickBackBtn = () => {
    window.history.back();
  };
  return (
    <SimpleHeaderWrapper>
      <BackBtnWrap onClick={onClickBackBtn}>
        <ArrowLeftOutlined
          style={{ fontSize: "20px", color: Theme.themeColor }}
        />
      </BackBtnWrap>
      <PostTitleWrap>
        <PostTitle>포스트 제목</PostTitle>
      </PostTitleWrap>
    </SimpleHeaderWrapper>
  );
};

export default SimpleHeader;
