import React, { useEffect } from "react";
import { NoneMemberLayoutWrapper } from "./style";
import Header from "../../components/Header";
import RightSideBar from "../../components/RightSideBar";
import Footer from "../../components/Footer";
import PostCard from "../../components/PostCard";
import Nav from "../../components/Nav";
import { LOAD_MAIN_POSTS_REQUEST } from "../../reducers/post";
import { useDispatch, useSelector } from "react-redux";
const NoneMemberLayout = () => {
  const dispatch = useDispatch();
  const { mainPosts } = useSelector(state => state.post);
  useEffect(() => {
    dispatch({
      type: LOAD_MAIN_POSTS_REQUEST
    });
  }, []);
  return (
    <NoneMemberLayoutWrapper>
      <Header />
      {mainPosts && mainPosts.map(post => <PostCard post={post} />)}
      <RightSideBar />
      <Footer />
      <Nav />
    </NoneMemberLayoutWrapper>
  );
};

export default NoneMemberLayout;
