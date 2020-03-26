import React from "react";
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
  PushpinOutlined
} from "@ant-design/icons";
import Link from "next/link";
const PostCard = ({ post }) => {
  console.log("post", post);
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
                      <Link href="/hashtag" key={v}>
                        <a style={{ color: "#1B98E5" }}>{v}</a>
                      </Link>
                    );
                  } else {
                    return v;
                  }
                })}
              </HashTag>
            </HashTagWrap>
            <MenuWrap>
              <CommentWrap>
                <MessageOutlined />
              </CommentWrap>
              <LikeWrap>
                <HeartOutlined />
              </LikeWrap>
              <PinWrap>
                <PushpinOutlined />
              </PinWrap>
              <ShareWrap>
                <ExportOutlined />
              </ShareWrap>
            </MenuWrap>
          </ContentWrap>
        </PrimeWrap>
      )}
    </PostCardWrapper>
  );
};

export default PostCard;
