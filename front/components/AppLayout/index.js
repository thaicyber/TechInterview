import React from "react";
import {
  AppLayoutWrapper,
  MainContentWrapper,
  MainContentNoneGridWrapper,
  AppLayoutSmallViewWrapper,
  AppLayoutMediumViewWrapper
} from "./style";
import Header from "../Header";
import PopularTagList from "../PopularTagList";
import Footer from "../Footer";
import Nav from "../Nav";
import router from "next/router";
import SearchForm from "../../containers/SearchForm";
const AppLayout = ({ children }) => {
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
            <AppLayoutMediumViewWrapper>
              <MainContentNoneGridWrapper>
                {children}
              </MainContentNoneGridWrapper>
            </AppLayoutMediumViewWrapper>
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
            <Header isShowLogo={false} />
            <AppLayoutSmallViewWrapper>
              <MainContentNoneGridWrapper>
                {children}
              </MainContentNoneGridWrapper>
            </AppLayoutSmallViewWrapper>
          </>
        );
      }
      case "/followers": {
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
      case "/followings": {
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
      case "/postLikers": {
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
      case "/likePosts": {
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

      case "/commentEdit": {
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
      case "/hashtag": {
        return (
          <>
            <Header isShowLogo={false} />
            <AppLayoutWrapper>
              <MainContentWrapper>{children}</MainContentWrapper>
              {/* <Nav /> */}
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
            {/* <Nav /> */}
          </AppLayoutWrapper>
        );
      }
    }
  };
  return <>{getLayout()}</>;
};

export default AppLayout;
