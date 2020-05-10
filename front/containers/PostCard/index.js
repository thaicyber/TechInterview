import React, { useCallback, memo, useLayoutEffect, useState } from "react";
import {
  PostCardWrapper,
  PrimeWrap,
  AvatarWrap,
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
  IconWrap,
  CountWrap,
  Count,
  Line,
  CardContentWrap,
  CardContent
} from "./style";
import Avatar from "../../components/Util/Avatar";
import { MessageOutlined, HeartOutlined } from "@ant-design/icons";
import { Icon } from "antd";
import Link from "next/link";
import Router from "next/router";
import Theme from "../../styles/Theme";
import { useDispatch, useSelector } from "react-redux";
import { LIKE_POST_REQUEST, UNLIKE_POST_REQUEST } from "../../reducers/post";
import { getRouteType } from "../../components/Util/meta";
import moment from "moment";
import { ATag } from "../../styles/GlobalComponentStyles";
moment.locale("ko");
const PostCard = memo(props => {
  const { post, showMenu, route } = props;
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  const urlRegEx = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/;
  const likeChecked =
    post && me && post.Likers && post.Likers.find(v => v.id === me.id);
  const type = getRouteType(route);
  const onClickLike = useCallback(() => {
    if (!me) {
      return alert("로그인이 필요한 서비스입니다.");
    }
    if (!likeChecked) {
      // 좋아요를 누르지 않은 상태
      dispatch({
        type: LIKE_POST_REQUEST,
        data: post.id,
        route: type
      });
    } else {
      // 좋아요를 누른 상태
      dispatch({
        type: UNLIKE_POST_REQUEST,
        data: post.id,
        route: type
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
    <>
      <PostCardWrapper>
        {post && (
          <PrimeWrap>
            <WriterInfoWrap>
              <AvatarWrap>
                <>
                  <Link
                    href={{
                      pathname: "/profile",
                      query: { id: post.UserId }
                    }}
                    prefetch
                    as={`/profile/${post.UserId}`}
                  >
                    <Avatar
                      size="small"
                      img={post.User && post.User.img ? post.User.img : null}
                    />
                  </Link>
                </>
              </AvatarWrap>
              <WriterName>{post && post.User && post.User.nickname}</WriterName>
              <WriteDate>
                <span>
                  {post &&
                    moment(post.publishedTime).format("YYYY년 MM월 DD일")}
                </span>
              </WriteDate>
            </WriterInfoWrap>
            <CardWrap onClick={onClickCard(post.link)}>
              <CardImageWrap>
                <CardImage img={post.img}></CardImage>
              </CardImageWrap>
              <CardTitleWrap>
                <CardTitle>{post.title}</CardTitle>
              </CardTitleWrap>
              <CardContentWrap>
                <CardContent>{post.previewContent}</CardContent>
              </CardContentWrap>
              <CardLinkWrap>
                <CardLink>
                  {post.link && urlRegEx.exec(String(post.link))[1]}
                </CardLink>
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
                        prefetch
                        as={`/hashtag/${v.slice(1)}`}
                        key={v}
                      >
                        <ATag
                          style={{
                            color: Theme.themeColor
                          }}
                        >
                          {v}
                        </ATag>
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
                <CommentWrap>
                  <Link
                    href={{ pathname: "/comment", query: { id: post.id } }}
                    prefetch
                    as={`/comment/${post.id}`}
                  >
                    <IconWrap>
                      <ATag>
                        <MessageOutlined
                          style={{ cursor: "pointer", fontSize: "1.3rem" }}
                        />
                      </ATag>
                    </IconWrap>
                  </Link>
                  <Link
                    href={{ pathname: "/comment", query: { id: post.id } }}
                    prefetch
                    as={`/comment/${post.id}`}
                  >
                    <CountWrap>
                      <Count>{post.Comments ? post.Comments.length : 0}</Count>
                    </CountWrap>
                  </Link>
                </CommentWrap>
                <LikeWrap>
                  <IconWrap onClick={onClickLike}>
                    {likeChecked ? (
                      <Icon
                        type="heart"
                        theme="filled"
                        style={{
                          color: "#ff415c",
                          cursor: "pointer",
                          fontSize: "1.3rem"
                        }}
                      />
                    ) : (
                      <HeartOutlined
                        style={{
                          cursor: "pointer",
                          fontSize: "1.3rem"
                        }}
                      />
                    )}
                  </IconWrap>
                  <Link
                    href={{
                      pathname: "/postLikers",
                      query: { id: post.id }
                    }}
                    prefetch
                    as={`/postLikers/${post.id}`}
                  >
                    <CountWrap>
                      <Count>{post.Likers ? post.Likers.length : 0}</Count>
                    </CountWrap>
                  </Link>
                </LikeWrap>
              </MenuWrap>
            ) : null}
          </PrimeWrap>
        )}
      </PostCardWrapper>
      {width <= 425 ? <Line /> : null}
    </>
  );
});

export default PostCard;
