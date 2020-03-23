import React from "react";
import {
  UserSettingWrapper,
  UserSettingContent,
  TopContent,
  BottomContent,
  Title,
  CancelWrap
} from "./style";
import { CloseOutlined } from "@ant-design/icons";
const UserSetting = ({ setAvatarClick }) => {
  const onClickCancel = () => {
    if (setAvatarClick) {
      setAvatarClick(false);
      document.body.style.overflowY = "scroll";
    }
  };
  return (
    <UserSettingWrapper>
      <UserSettingContent>
        <TopContent>
          <Title></Title>
          <CancelWrap onClick={onClickCancel}>
            <CloseOutlined style={{ fontSize: "18px", color: "blue" }} />
          </CancelWrap>
        </TopContent>
        <BottomContent></BottomContent>
      </UserSettingContent>
    </UserSettingWrapper>
  );
};

export default UserSetting;
