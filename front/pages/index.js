import React from "react";
import PostCard from "../components/PostCard";
import { useSelector } from "react-redux";
import { LOAD_MAIN_POSTS_REQUEST } from "../reducers/post";
const Home = () => {
  const { mainPosts } = useSelector(state => state.post);
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
};
export default Home;
