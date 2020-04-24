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
    window.history.back();
  };
  const getComponent = () => {
    switch (Router && Router.router && Router.router.route) {
      case "/comment": {
        return <Title>{post && post.title}</Title>;
      }
      case "/commentEdit": {
        return <Title>{post && post.title}</Title>;
      }
      case "/myPage": {
        return <Title>계정정보 수정</Title>;
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
    <SimpleHeaderWrapper>
      <BackBtnWrap onClick={onClickBackBtn}>
        <ArrowLeftOutlined
          style={{ fontSize: "20px", color: Theme.themeColor }}
        />
      </BackBtnWrap>
      <TitleWrap>{getComponent()}</TitleWrap>
    </SimpleHeaderWrapper>
  );
};

export default SimpleHeader;
