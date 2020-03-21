import React from "react";
import { NoneMemberLayoutWrapper } from "./style";
import Header from "../../components/Header";
import RightSideBar from "../../components/RightSideBar";
import Footer from "../../components/Footer";
import PostCard from "../../components/PostCard";
const NoneMemberLayout = () => {
  return (
    <NoneMemberLayoutWrapper>
      <Header />
      <PostCard />
      <RightSideBar />
      <Footer />
    </NoneMemberLayoutWrapper>
  );
};

export default NoneMemberLayout;
