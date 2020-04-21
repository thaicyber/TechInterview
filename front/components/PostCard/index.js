import React, { useState, useCallback, useEffect } from "react";
import {
  PostCardWrapper,
  PrimeWrap,
  AvatarWrap,
  ContentWrap,
  WriterInfoWrap,
  WriterName,
  WriteDate,
  CardWrap,
  CardImageWrap,
  CardImage,
  CardTitleWrap,
  CardTitle,
  CardLinkWrap,
  CardLink,
  HashTagWrap,
  HashTag,
  MenuWrap,
  CommentWrap,
  LikeWrap,
  ShareWrap,
  PinWrap
} from "./style";
import Avatar from "../Util/Avatar";
import {
  MessageOutlined,
  ExportOutlined,
  HeartOutlined,
  PushpinOutlined,
  HeartTwoTone
} from "@ant-design/icons";
import { Icon } from "antd";
import Link from "next/link";
import Router from "next/router";
import Theme from "../../styles/Theme";
import { useDispatch, useSelector } from "react-redux";
import {
  LIKE_POST_REQUEST,
  UNLIKE_POST_REQUEST,
  LOAD_POST_LIKERS_REQUEST
} from "../../reducers/post";
const PostCard = props => {
  const { post, showMenu } = props;
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  // console.log("post", post);
  // console.log("me", me);
  const likeChecked =
    post && me && post.Likers && post.Likers.find(v => v.id === me.id);
  const onClickLike = useCallback(() => {
    if (!me) {
      return alert("로그인이 필요한 서비스입니다.");
    }
    if (!likeChecked) {
      // 좋아요를 누르지 않은 상태
      dispatch({
        type: LIKE_POST_REQUEST,
        data: post.id
      });
    } else {
      // 좋아요를 누른 상태
      dispatch({
        type: UNLIKE_POST_REQUEST,
        data: post.id
      });
    }
  }, [me, post && post.id, likeChecked]);
  const onClickCard = useCallback(
    link => () => {
      Router.push(link);
    },
    []
  );
  return (
    <PostCardWrapper>
      {post && (
        <PrimeWrap>
          <Link
            href={{ pathname: "/profile", query: { id: post.UserId } }}
            as={`/profile/${post.UserId}`}
          >
            <AvatarWrap>
              <Avatar size="large" img={post.User.img} />
              <a></a>
            </AvatarWrap>
          </Link>
          <ContentWrap>
            <WriterInfoWrap>
              <WriterName>{post && post.User && post.User.nickname}</WriterName>
              <WriteDate>{post && post.publishedTime}</WriteDate>
            </WriterInfoWrap>
            <CardWrap onClick={onClickCard(post.link)}>
              <CardImageWrap>
                <CardImage img={post.postImg}></CardImage>
              </CardImageWrap>
              <CardTitleWrap>
                <CardTitle>{post.title}</CardTitle>
              </CardTitleWrap>
              <CardLinkWrap>
                <CardLink>postLink.com</CardLink>
              </CardLinkWrap>
            </CardWrap>
            <HashTagWrap>
              <HashTag>
                {post.content.split(/(#[^\s]+)/g).map(v => {
                  if (v.match(/(#[^\s]+)/g)) {
                    return (
                      <Link
                        href={{
                          pathname: "/hashtag",
                          query: { tag: v.slice(1) }
                        }}
                        as={`/hashtag/${v.slice(1)}`}
                        key={v}
                      >
                        <a style={{ color: Theme.themeColor }}>{v}</a>
                      </Link>
                    );
                  } else {
                    return v;
                  }
                })}
              </HashTag>
            </HashTagWrap>
            {showMenu ? (
              <MenuWrap>
                <Link
                  href={{ pathname: "/comment", query: { id: post.id } }}
                  as={`/comment/${post.id}`}
                >
                  <CommentWrap>
                    <a></a>
                    <MessageOutlined style={{ cursor: "pointer" }} />
                  </CommentWrap>
                </Link>
                <LikeWrap onClick={onClickLike}>
                  {likeChecked ? (
                    <Icon
                      type="heart"
                      theme="filled"
                      style={{ color: "#eb2f96" }}
                    />
                  ) : (
                    <HeartOutlined
                      style={{
                        cursor: "pointer"
                      }}
                    />
                  )}
                </LikeWrap>
                <PinWrap>
                  <PushpinOutlined style={{ cursor: "pointer" }} />
                </PinWrap>
                <ShareWrap>
                  <ExportOutlined style={{ cursor: "pointer" }} />
                </ShareWrap>
              </MenuWrap>
            ) : null}
          </ContentWrap>
        </PrimeWrap>
      )}
    </PostCardWrapper>
  );
};

export default PostCard;
