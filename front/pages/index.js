import React, { useEffect, useCallback, useRef } from "react";
import PostCard from "../components/PostCard";
import { useSelector, useDispatch } from "react-redux";
import {
  LOAD_MAIN_POSTS_REQUEST,
  LOAD_COUNT_POSTS_REQUEST
} from "../reducers/post";
const Home = () => {
  const dispatch = useDispatch();
  const { mainPosts, hasMorePost } = useSelector(state => state.post);
  const countRef = useRef([]);
  const onScroll = useCallback(() => {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 300
    )
      if (hasMorePost) {
        const lastId = mainPosts[mainPosts.length - 1].id;
        if (!countRef.current.includes(lastId)) {
          dispatch({
            type: LOAD_MAIN_POSTS_REQUEST,
            lastId
          });
          countRef.current.push(lastId);
        }
      }
  }, [hasMorePost, mainPosts.length]);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [mainPosts.length]);
  return (
    <>
      {mainPosts &&
        mainPosts.map(post => (
          <PostCard showMenu={true} post={post} key={post.id} />
        ))}
    </>
  );
};
Home.getInitialProps = async context => {
  context.store.dispatch({
    type: LOAD_MAIN_POSTS_REQUEST
  });
  context.store.dispatch({
    type: LOAD_COUNT_POSTS_REQUEST
  });
};
export default Home;
