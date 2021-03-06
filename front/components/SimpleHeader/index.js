import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { SimpleHeaderWrapper, BackBtnWrap, TitleWrap, Title } from "./style";
import Theme from "../../styles/Theme";
import { useSelector } from "react-redux";
import Router from "next/router";
const SimpleHeader = () => {
  const { post } = useSelector(state => state.post);
  const { me, userInfo } = useSelector(state => state.user);
  const onClickBackBtn = () => {
    //댓글 수정 후, 댓글창에서 뒤로가기 누르면 메인으로 이동 (사용자 ux 측면 향상)
    if (Router && Router.router && Router.router.route === "/comment") {
      Router.push("/");
    } else {
      window.history.back();
    }
  };
  const isSearchHashRoute =
    (Router && Router.router && Router.router.route === "/hashtag") ||
    Router.router.route === "/search"
      ? true
      : false;
  const getComponent = () => {
    switch (Router && Router.router && Router.router.route) {
      case "/comment": {
        return <Title>{post && post.title}</Title>;
      }
      case "/commentEdit": {
        return <Title>{post && post.title}</Title>;
      }
      case "/myPage": {
        return <Title>프로필 수정</Title>;
      }
      case "/profile": {
        return <Title>프로필</Title>;
      }
      case "/followers": {
        return <Title>팔로워</Title>;
      }
      case "/followings": {
        return <Title>팔로잉</Title>;
      }
      case "/postLikers": {
        return <Title>좋아요</Title>;
      }
      case "/likePosts": {
        return <Title>좋아요</Title>;
      }
      case "/search": {
        return <Title>검색</Title>;
      }
      case "/hashtag": {
        return (
          <Title>
            <span style={{ marginRight: "0.2rem" }}>#</span>
            {Router &&
              Router.router &&
              Router.router.query &&
              Router.router.query.tag}
          </Title>
        );
      }

      default: {
        return null;
      }
    }
  };
  return (
    <SimpleHeaderWrapper isExtend={isSearchHashRoute}>
      <BackBtnWrap onClick={onClickBackBtn}>
        <ArrowLeftOutlined
          style={{ fontSize: "1.25rem", color: Theme.themeColor }}
        />
      </BackBtnWrap>
      <TitleWrap>{getComponent()}</TitleWrap>
    </SimpleHeaderWrapper>
  );
};

export default SimpleHeader;
