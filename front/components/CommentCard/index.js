import React from "react";
import {
  CommentCardWrapper,
  CommentCardContentWrap,
  CommentContent,
  Options,
  AvatarWrap,
  CommentAuthorWrap,
  CommentCreatedWrap,
  CommentInfoWrap,
  CreatedTime,
  Author,
  ContentWrap
} from "./style";
import Avatar from "../Util/Avatar";
import { MoreOutlined } from "@ant-design/icons";
import Theme from "../../styles/Theme";
const CommentCard = props => {
  const { comment } = props;
  console.log("comment", comment);
  return (
    <CommentCardWrapper>
      <CommentCardContentWrap>
        <AvatarWrap>
          <Avatar size="small" />
        </AvatarWrap>
        <CommentContent>
          <CommentInfoWrap>
            <CommentAuthorWrap>
              <Author>{comment.User.nickname}</Author>
            </CommentAuthorWrap>
            <CommentCreatedWrap>
              <CreatedTime>{comment.createdAt}</CreatedTime>
            </CommentCreatedWrap>
          </CommentInfoWrap>
          <ContentWrap>{comment.content}</ContentWrap>
        </CommentContent>
        <Options>
          <MoreOutlined style={{ fontSize: "25px", color: Theme.themeColor }} />
        </Options>
      </CommentCardContentWrap>
    </CommentCardWrapper>
  );
};
export default CommentCard;
