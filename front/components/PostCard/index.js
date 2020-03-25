import React from "react";
import { PostCardWrapper, Content, AvatarWrap } from "./style";
import Avatar from "../Util/Avatar";
const PostCard = ({ post }) => {
  return (
    <PostCardWrapper>
      {post && (
        <Content>
          <AvatarWrap>
            <Avatar size="medium" />
          </AvatarWrap>
        </Content>
      )}
    </PostCardWrapper>
  );
};

export default PostCard;
