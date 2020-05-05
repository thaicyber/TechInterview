import React, { useEffect } from "react";
import { AppLayoutWrapper, Wrap, MainContentWrapper } from "./style";
import Header from "../Header";
import PopularTagList from "../PopularTagList";
import Footer from "../Footer";
import Nav from "../Nav";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_USER_REQUEST } from "../../reducers/user";
import router from "next/router";
import LeftSideBar from "../LeftSideBar";
import SimpleHeader from "../SimpleHeader";
import SearchForm from "../../containers/SearchForm";
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
          // <>
          //   <SimpleHeader />
          //   <MainContentWrapper>{children}</MainContentWrapper>
          // </>
          <AppLayoutWrapper>
            <div>
              <Header isShowLogo={true} />
              <SimpleHeader />
              <MainContentWrapper isLogined={me ? true : false}>
                {children}
              </MainContentWrapper>
            </div>
            <div>
              <PopularTagList />
              {/* <Footer /> */}
              <Nav />
            </div>
          </AppLayoutWrapper>
        );
      }
      case "/myPage": {
        return (
          <>
            <SimpleHeader />
            <MainContentWrapper>{children}</MainContentWrapper>
          </>
        );
      }
      case "/profile": {
        return (
          <>
            <SimpleHeader />
            <MainContentWrapper>{children}</MainContentWrapper>
          </>
        );
      }
      case "/followers": {
        return (
          <>
            <SimpleHeader />
            <MainContentWrapper>{children}</MainContentWrapper>
          </>
        );
      }
      case "/followings": {
        return (
          <>
            <SimpleHeader />
            <MainContentWrapper>{children}</MainContentWrapper>
          </>
        );
      }
      case "/postLikers": {
        return (
          <>
            <SimpleHeader />
            <MainContentWrapper>{children}</MainContentWrapper>
          </>
        );
      }
      case "/likePosts": {
        return (
          <>
            <SimpleHeader />
            <MainContentWrapper>{children}</MainContentWrapper>
          </>
        );
      }

      case "/commentEdit": {
        return (
          <>
            <SimpleHeader />
            <MainContentWrapper>{children}</MainContentWrapper>
          </>
        );
      }
      case "/hashtag": {
        return (
          <>
            <Header isShowLogo={false} />
            <AppLayoutWrapper>
              <MainContentWrapper>{children}</MainContentWrapper>
              {/* <PopularTagList /> */}
              <Nav />
            </AppLayoutWrapper>
          </>
        );
      }

      case "/admin": {
        return <>{children}</>;
      }

      case "/search": {
        return (
          <>
            <Header isShowLogo={false} />
            <AppLayoutWrapper>
              <SearchForm />
              <MainContentWrapper>{children}</MainContentWrapper>
            </AppLayoutWrapper>
          </>
        );
      }
      default: {
        return (
          <AppLayoutWrapper>
            <Header isShowLogo={true} />
            <MainContentWrapper>{children}</MainContentWrapper>
            {/* <PopularTagList /> */}
            {/* <Footer /> */}
            <Nav />
          </AppLayoutWrapper>
        );
      }
    }
  };
  return <>{getLayout()}</>;
};

export default AppLayout;
