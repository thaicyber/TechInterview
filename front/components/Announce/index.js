import React from "react";
import {
  IconWrapper,
  DescWrap,
  Desc,
  AnnounceWrap
} from "../../styles/GlobalComponentStyles";
import { MehOutlined } from "@ant-design/icons";
import Theme from "../../styles/Theme";
const Announce = ({ message }) => {
  return (
    <AnnounceWrap>
      <IconWrapper>
        <MehOutlined style={{ fontSize: "50px", color: Theme.themeColor }} />
      </IconWrapper>
      <DescWrap>
        <Desc>{message}</Desc>
      </DescWrap>
    </AnnounceWrap>
  );
};

export default Announce;
