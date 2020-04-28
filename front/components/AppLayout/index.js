import React, { useEffect } from "react";
import { AppLayoutWrapper, Wrap, SimpleWrap } from "./style";
import Header from "../Header";
import RightSideBar from "../RightSideBar";
import Footer from "../Footer";
import Nav from "../Nav";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_USER_REQUEST } from "../../reducers/user";
import router from "next/router";
import LeftSideBar from "../LeftSideBar";
import SimpleHeader from "../SimpleHeader";
const AppLayout = ({ children }) => {
  const { me } = useSelector(state => state.user);
  const getLayout = () => {
    switch (router && router.router && router.router.pathname) {
      case "/login": {
        return <>{children}</>;
      }
      case "/signup": {
        return <>{children}</>;
      }
      case "/comment": {
        return (
          <>
            <SimpleHeader />
            <SimpleWrap>{children}</SimpleWrap>
          </>
        );
      }
      case "/myPage": {
        return (
          <>
            <SimpleHeader />
            <SimpleWrap>{children}</SimpleWrap>
          </>
        );
      }
      case "/profile": {
        return (
          <>
            <SimpleHeader />
            <SimpleWrap>{children}</SimpleWrap>
          </>
        );
      }
      case "/followers": {
        return (
          <>
            <SimpleHeader />
            <SimpleWrap>{children}</SimpleWrap>
          </>
        );
      }
      case "/followings": {
        return (
          <>
            <SimpleHeader />
            <SimpleWrap>{children}</SimpleWrap>
          </>
        );
      }
      case "/postLikers": {
        return (
          <>
            <SimpleHeader />
            <SimpleWrap>{children}</SimpleWrap>
          </>
        );
      }
      case "/likePosts": {
        return (
          <>
            <SimpleHeader />
            <SimpleWrap>{children}</SimpleWrap>
          </>
        );
      }

      case "/commentEdit": {
        return (
          <>
            <SimpleHeader />
            <SimpleWrap>{children}</SimpleWrap>
          </>
        );
      }
      case "/hashtag": {
        return (
          <AppLayoutWrapper>
            <SimpleHeader />
            <SimpleWrap>{children}</SimpleWrap>
            <RightSideBar />
            <LeftSideBar />
            <Footer />
            <Nav />
          </AppLayoutWrapper>
        );
      }
      default: {
        return null;
      }
    }
  };
  return <>{getLayout()}</>;
};

export default AppLayout;
