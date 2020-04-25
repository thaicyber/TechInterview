import React from "react";
import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import { LOAD_MAIN_POSTS_REQUEST } from "../reducers/post";
import Announce from "../components/Announce";

const LikePosts = () => {
  const { mainPosts } = useSelector(state => state.post);
  const { me } = useSelector(state => state.user);
  let isExistLikePosts = false;
  const isExistLikePostsCheck = () => {
    if (me) {
      mainPosts.forEach(post => {
        post.Likers.forEach(v => {
          if (v.id === me.id) {
            isExistLikePosts = true;
          }
        });
      });
    }
  };
  isExistLikePostsCheck();
  return (
    <>
      {isExistLikePosts ? (
        mainPosts &&
        me &&
        mainPosts.map(
          post =>
            post.Likers &&
            post.Likers.length > 0 &&
            post.Likers.map(v => {
              if (v.id === me.id) {
                return <PostCard showMenu={true} post={post} key={post.id} />;
              }
            })
        )
      ) : (
        <Announce message="좋아요 게시글이 없습니다." />
      )}
    </>
  );
};
LikePosts.getInitialProps = async context => {
  context.store.dispatch({
    type: LOAD_MAIN_POSTS_REQUEST
  });
};
export default LikePosts;
