import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  AppLayoutWrapper,
  Wrap,
  MainContentWrapper,
  TopWrapper,
  MainContentNoneGridWrapper,
  AppLayoutSmallViewWrapper
} from "./style";
import Header from "../Header";
import PopularTagList from "../PopularTagList";
import Footer from "../Footer";
import Nav from "../Nav";
import router from "next/router";
import SimpleHeader from "../SimpleHeader";
import SearchForm from "../../containers/SearchForm";
const AppLayout = ({ children }) => {
  const [width, setWidth] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
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
            <Header isShowLogo={false} />
            <AppLayoutSmallViewWrapper>
              <MainContentNoneGridWrapper>
                {children}
              </MainContentNoneGridWrapper>
            </AppLayoutSmallViewWrapper>
          </>
        );
      }
      case "/myPage": {
        return (
          <>
            <Header isShowLogo={false} />
            <AppLayoutSmallViewWrapper>
              <MainContentNoneGridWrapper>
                {children}
              </MainContentNoneGridWrapper>
            </AppLayoutSmallViewWrapper>
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
            <Header isShowLogo={false} />
            <AppLayoutWrapper>
              <MainContentWrapper>{children}</MainContentWrapper>
              {/* <PopularTagList /> */}
            </AppLayoutWrapper>
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
