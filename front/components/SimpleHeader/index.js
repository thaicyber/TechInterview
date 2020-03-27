import React, { useEffect } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import {
  SimpleHeaderWrapper,
  BackBtnWrap,
  PostTitleWrap,
  PostTitle
} from "./style";
import Theme from "../../styles/Theme";
import { useDispatch, useSelector } from "react-redux";
const SimpleHeader = () => {
  const { post } = useSelector(state => state.post);
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
        <PostTitle>{post && post.title}</PostTitle>
      </PostTitleWrap>
    </SimpleHeaderWrapper>
  );
};

export default SimpleHeader;
