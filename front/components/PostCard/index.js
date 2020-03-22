import React from "react";
import { PostCardWrapper, Content } from "./style";
const PostCard = () => {
  return (
    <PostCardWrapper>
      {[1, 2, 3, 4, 5].map(item => (
        <Content>{item}</Content>
      ))}
    </PostCardWrapper>
  );
};

export default PostCard;
