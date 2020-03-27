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
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  useEffect(() => {
    dispatch({
      type: LOAD_USER_REQUEST
    });
  }, []);
  const getLayout = () => {
    switch (router && router.router && router.router.pathname) {
      case "/login": {
        return <Wrap>{children}</Wrap>;
      }
      case "/signup": {
        return <Wrap>{children}</Wrap>;
      }
      case "/comment": {
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
            <Header />
            <Wrap isLogined={me ? true : false}>{children}</Wrap>
            <RightSideBar />
            <LeftSideBar />
            <Footer />
            <Nav />
          </AppLayoutWrapper>
        );
      }
      default: {
        return (
          <AppLayoutWrapper>
            <Header />
            <Wrap isLogined={me ? true : false}>{children}</Wrap>
            <RightSideBar />
            <LeftSideBar />
            <Footer />
            <Nav />
          </AppLayoutWrapper>
        );
      }
    }
  };
  return <>{getLayout()}</>;
};

export default AppLayout;
