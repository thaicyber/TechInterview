import React from "react";
import {
  IconWrapper,
  DescWrap,
  Desc,
  AnnounceWrap
} from "../../styles/GlobalComponentStyles";
import { InfoCircleOutlined } from "@ant-design/icons";
import Theme from "../../styles/Theme";
const Announce = ({ message }) => {
  console.log("message", message);
  return (
    <AnnounceWrap>
      <IconWrapper>
        <InfoCircleOutlined
          style={{ fontSize: "20px", color: Theme.themeColor }}
        />
      </IconWrapper>
      <DescWrap>
        <Desc>{message}</Desc>
      </DescWrap>
    </AnnounceWrap>
  );
};

export default Announce;
