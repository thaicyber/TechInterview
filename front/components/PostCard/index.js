import React from "react";
import { PostCardWrapper, Content } from "./style";
const PostCard = ({ post }) => {
  return (
    <PostCardWrapper>{post && <Content>{post.title}</Content>}</PostCardWrapper>
  );
};

export default PostCard;
