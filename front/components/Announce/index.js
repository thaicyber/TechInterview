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
  return (
    <AnnounceWrap>
      <IconWrapper>
        <InfoCircleOutlined
          style={{ fontSize: "3.3rem", color: Theme.themeColor }}
        />
      </IconWrapper>
      <DescWrap>
        <Desc>{message}</Desc>
      </DescWrap>
    </AnnounceWrap>
  );
};

export default Announce;
