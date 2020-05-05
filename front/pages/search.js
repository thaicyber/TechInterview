import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../containers/PostCard";
import { LOAD_HASHTAG_POSTS_INITIAL } from "../reducers/post";
const Search = () => {
  const dispatch = useDispatch();
  const { hashtagPosts } = useSelector(state => state.post);
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
      dispatch({ type: LOAD_HASHTAG_POSTS_INITIAL });
    };
  }, []);
  useEffect(() => {
    if (hashtagPosts.length === 0) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [hashtagPosts.length]);
  return (
    <>
      {hashtagPosts &&
        hashtagPosts.length > 0 &&
        hashtagPosts.map(post => (
          <PostCard showMenu={true} post={post} key={post.id} route="hashtag" />
        ))}
    </>
  );
};

export default Search;
