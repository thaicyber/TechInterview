import React, { useEffect } from "react";
import { PostCardWrapper, Content } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_MAIN_POSTS_REQUEST } from "../../reducers/post";
const PostCard = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);
  useEffect(() => {
    dispatch({
      type: LOAD_MAIN_POSTS_REQUEST
    });
  }, []);
  return (
    <PostCardWrapper isLogined={me ? true : false}>
      {mainPosts && mainPosts.map(item => <Content>{item.content}</Content>)}
    </PostCardWrapper>
  );
};

export default PostCard;
