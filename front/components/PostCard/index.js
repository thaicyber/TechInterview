import React, { useState, useCallback } from "react";
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
import Link from "next/link";
import Theme from "../../styles/Theme";
import { useDispatch, useSelector } from "react-redux";
import { LIKE_POST_REQUEST } from "../../reducers/post";
const PostCard = props => {
  const { post, showMenu } = props;
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  console.log("post", post);
  console.log("me", me);
  const [clickedLike, setClickedLike] = useState(false);
  const onClickLike = useCallback(() => {
    if (!clickedLike) {
      dispatch({
        type: LIKE_POST_REQUEST,
        data: post.id
      });
    } else {
      dispatch({});
    }
    setClickedLike(!clickedLike);
  }, [clickedLike]);
  const alreadyCheck =
    post && me && post.Likers && post.Likers.find(v => v.Like.UserId === me.id);
  console.log("alreadyCheck", alreadyCheck);
  return (
    <PostCardWrapper>
      {post && (
        <PrimeWrap>
          <AvatarWrap>
            <Avatar size="large" img={post.User.img} />
          </AvatarWrap>
          <ContentWrap>
            <WriterInfoWrap>
              <WriterName>{post && post.User && post.User.nickname}</WriterName>
              <WriteDate>{post && post.publishedTime}</WriteDate>
            </WriterInfoWrap>
            <CardWrap>
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
                    <MessageOutlined style={{ cursor: "pointer" }} />
                  </CommentWrap>
                </Link>
                <LikeWrap onClick={onClickLike}>
                  <HeartTwoTone
                    style={{ cursor: "pointer" }}
                    twoToneColor={
                      clickedLike || alreadyCheck ? "#eb2f96" : Theme.themeColor
                    }
                  />
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
