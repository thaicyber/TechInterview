import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import { LOAD_HASHTAG_POSTS_REQUEST } from "../reducers/post";
const hashtag = ({ tag }) => {
  const dispatch = useDispatch();
  const { mainPosts } = useSelector(state => state.post);
  useEffect(() => {
    dispatch({
      type: LOAD_HASHTAG_POSTS_REQUEST,
      data: tag
    });
  }, [tag]);
  return (
    <>
      {mainPosts &&
        mainPosts.map(post => (
          <PostCard showMenu={true} post={post} key={post.id} />
        ))}
    </>
  );
};

hashtag.getInitialProps = async context => {
  const tag = context.query.tag;
  return { tag };
};

export default hashtag;
