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
            <AppLayoutWrapper>
              <MainContentNoneGridWrapper isExtend={true}>
                {children}
              </MainContentNoneGridWrapper>
            </AppLayoutWrapper>
          </>
        );
      }
      case "/myPage": {
        return (
          <>
            <Header isShowLogo={false} />
            <AppLayoutWrapper>
              <MainContentNoneGridWrapper>
                {children}
              </MainContentNoneGridWrapper>
            </AppLayoutWrapper>
          </>
        );
      }
      case "/profile": {
        return (
          <>
            <Header isShowLogo={false} />
            <AppLayoutWrapper>
              <MainContentNoneGridWrapper>
                {children}
              </MainContentNoneGridWrapper>
            </AppLayoutWrapper>
          </>
        );
      }
      case "/followers": {
        return (
          <>
            <Header isShowLogo={false} />
            <AppLayoutWrapper>
              <MainContentNoneGridWrapper>
                {children}
              </MainContentNoneGridWrapper>
            </AppLayoutWrapper>
          </>
        );
      }
      case "/followings": {
        return (
          <>
            <Header isShowLogo={false} />
            <AppLayoutWrapper>
              <MainContentNoneGridWrapper>
                {children}
              </MainContentNoneGridWrapper>
            </AppLayoutWrapper>
          </>
        );
      }
      case "/postLikers": {
        return (
          <>
            <Header isShowLogo={false} />
            <AppLayoutWrapper>
              <MainContentNoneGridWrapper>
                {children}
              </MainContentNoneGridWrapper>
            </AppLayoutWrapper>
          </>
        );
      }
      case "/likePosts": {
        return (
          <>
            <Header isShowLogo={false} />
            <AppLayoutWrapper>
              <MainContentNoneGridWrapper>
                {children}
              </MainContentNoneGridWrapper>
            </AppLayoutWrapper>
          </>
        );
      }

      case "/commentEdit": {
        return (
          <>
            <Header isShowLogo={false} />
            <AppLayoutWrapper>
              <MainContentNoneGridWrapper>
                {children}
              </MainContentNoneGridWrapper>
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
              <MainContentWrapper isSearch={true}>
                {children}
              </MainContentWrapper>
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
