import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../containers/PostCard";
import {
  LOAD_HASHTAG_POSTS_REQUEST,
  LOAD_HASHTAG_POSTS_INITIAL
} from "../reducers/post";
import Announce from "../components/Announce";
const Hashtag = ({ tag }) => {
  const dispatch = useDispatch();
  const { hashtagPosts } = useSelector(state => state.post);
  // console.log("hashtagPosts", hashtagPosts);
  useEffect(() => {
    // componentWillUnmount시, 리덕스에 있는 hashtagPosts 초기화
    return () => {
      dispatch({ type: LOAD_HASHTAG_POSTS_INITIAL });
    };
  }, []);
  return (
    <>
      {hashtagPosts && hashtagPosts.length > 0 ? (
        hashtagPosts.map(post => (
          <PostCard showMenu={true} post={post} key={post.id} route="hashtag" />
        ))
      ) : (
        <Announce message={`#${tag} 검색된 결과가 없습니다.`} />
      )}
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
