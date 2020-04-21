import React, { useEffect } from "react";
import PostCard from "../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_MAIN_POSTS_REQUEST } from "../reducers/post";
const Home = () => {
  const dispatch = useDispatch();
  const { mainPosts } = useSelector(state => state.post);
  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_MAIN_POSTS_REQUEST
  //   });
  // }, []);
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
  // console.log(Object.keys(context));
};
export default Home;
