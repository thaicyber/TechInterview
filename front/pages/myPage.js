import React from "react";
import styled from "styled-components";
import Avatar from "../components/Util/Avatar";
import { CameraOutlined } from "@ant-design/icons";
const MyPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  position: relative;
`;
const IconWrap = styled.div`
  position: absolute;
  top: 43%;
  right: 171px;
`;
const MyPage = () => {
  return (
    <MyPageWrapper>
      <Avatar size="superLarge">
        <IconWrap>
          <CameraOutlined style={{ color: "white", fontSize: "20px" }} />
        </IconWrap>
      </Avatar>
    </MyPageWrapper>
  );
};

export default MyPage;
