import React from "react";
import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import { LOAD_HASHTAG_POSTS_REQUEST } from "../reducers/post";
import Announce from "../components/Announce";
const Hashtag = ({ tag }) => {
  const { hashtagPosts } = useSelector(state => state.post);
  // console.log("hashtagPosts", hashtagPosts);
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
