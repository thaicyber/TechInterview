import React, { useEffect } from "react";
import { PostCardWrapper, Content } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_MAIN_POSTS_REQUEST } from "../../reducers/post";
const PostCard = ({ post }) => {
  const { me } = useSelector(state => state.user);
  return (
    <PostCardWrapper isLogined={me ? true : false}>
      {post && <Content>{post.title}</Content>}
    </PostCardWrapper>
  );
};

export default PostCard;
