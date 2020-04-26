import React from "react";
import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import { LOAD_HASHTAG_POSTS_REQUEST } from "../reducers/post";
const Hashtag = () => {
  const { hashtagPosts } = useSelector(state => state.post);
  // console.log("hashtagPosts", hashtagPosts);
  return (
    <>
      {hashtagPosts &&
        hashtagPosts.map(post => (
          <PostCard showMenu={true} post={post} key={post.id} route="hashtag" />
        ))}
    </>
  );
};

Hashtag.getInitialProps = async context => {
  const tag = context.query.tag;
  context.store.dispatch({
    type: LOAD_HASHTAG_POSTS_REQUEST,
    data: tag
  });
  return { tag };
};

export default Hashtag;
