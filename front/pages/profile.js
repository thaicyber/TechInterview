import React, { useCallback, useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LOAD_USER_REQUEST,
  FOLLOW_USER_REQUEST,
  UNFOLLOW_USER_REQUEST
} from "../reducers/user";
import styled, { css } from "styled-components";
import Avatar from "../components/Util/Avatar";
import { LOAD_USER_POSTS_REQUEST } from "../reducers/post";
import PostCard from "../containers/PostCard";
import Theme from "../styles/Theme";
import Link from "next/link";
import Router from "next/router";
import Helmet from "react-helmet";
import { device } from "../styles/device";
const ProfileWrapper = styled.div`
  display: grid;
  grid-template-rows: 182px 60px 1fr;
  grid-auto-columns: 100%;
  min-height: 100vh;
`;
const UserInfoWrap = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
`;
const UserFollowPostInfoWrap = styled.section`
  width: 100%;
  height: 100%;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  display: flex;
`;
const UserPostsWrap = styled.section`
  width: 100%;
  height: 100%;
`;
const AvatarWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
`;
const NicknameWrap = styled.div`
  display: flex;
  align-items: center;
`;
const Nickname = styled.span`
  margin-left: 1.5rem;
  font-weight: 400;
  font-size: 1.2rem;
`;
const BoxWrap = css`
  height: 100%;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const PostWrap = styled.div`
  ${BoxWrap}
`;
const FollowWrap = styled.div`
  ${BoxWrap}
`;
const FollowingWrap = styled.div`
  ${BoxWrap}
`;
const Title = styled.a`
  display: block;
  color: rgb(0, 0, 0, 0.4);
  text-decoration: none;
`;
const Number = styled.span`
  display: block;
  margin-top: 0.3rem;
  font-weight: 600;
`;
const FollowBtnWrapCss = css`
  position: absolute;
  top: 5.5rem;
  padding-left: 0.2rem;
  right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  @media ${device.laptop} {
    right: 25rem;
  }
`;
const UnFollowBtnWrap = styled.div`
  ${FollowBtnWrapCss}
  color : white;
  background-color: ${Theme.themeColor};
`;
const FollowBtnWrap = styled.div`
  ${FollowBtnWrapCss}
  color: ${Theme.themeColor};
  border: 1px solid ${Theme.themeColor};
`;
const FollowBtnName = styled.span``;
const UnFollowBtnName = styled.span``;
const Profile = memo(({ id }) => {
  const dispatch = useDispatch();
  const { userInfo, me } = useSelector(state => state.user);
  const { userPosts } = useSelector(state => state.post);
  // console.log("userInfo", userInfo);
  // console.log("me", me);
  useEffect(() => {
    document.body.style.overflowY = "scroll";
    if (!userInfo) {
      dispatch({
        type: LOAD_USER_REQUEST,
        data:
          id ||
          (Router &&
            Router.router &&
            Router.router.query &&
            Router.router.query.id)
      });
    }
    if (!me) {
      dispatch({
        type: LOAD_USER_REQUEST
      });
    }
  }, []);
  const onClickFollow = useCallback(
    userId => () => {
      dispatch({
        type: FOLLOW_USER_REQUEST,
        data: userId
      });
    },
    []
  );
  const onClickUnFollow = useCallback(
    userId => () => {
      dispatch({
        type: UNFOLLOW_USER_REQUEST,
        data: userId
      });
    },
    []
  );
  // console.log("userInfo", userInfo);
  // console.log("userPosts", userPosts);
  // console.log("me", me);
  const alreadyFollow =
    me &&
    userInfo &&
    me.id !== userInfo.id &&
    me.Followings &&
    me.Followings.find(f => f.id === userInfo.id)
      ? true
      : false;
  // console.log("alreadyFollow", alreadyFollow);
  return (
    <>
      {userInfo && (
        <Helmet
          title={`${userInfo.nickname}님의 프로필`}
          description={`${userInfo.nickname}님의 게시글 ${userInfo.Posts} 확인 하러가기`}
          meta={[
            {
              name: "description",
              content: `${userInfo.nickname}님의 게시글 ${userInfo.Posts} 확인 하러가기`
            },
            {
              property: "og:title",
              content: `${userInfo.nickname}님의 프로필`
            },
            {
              property: "og:description",
              content: `${userInfo.nickname}님의 게시글 ${userInfo.Posts} 확인 하러가기`
            },
            {
              property: "og:url",
              content: `techinterview/profile/${id}`
            },
            {
              property: "og:image",
              content:
                userInfo && userInfo.img
                  ? userInfo.img
                  : "http://techinterview.kr/favicon.ico"
            }
          ]}
        />
      )}
      <ProfileWrapper>
        <UserInfoWrap>
          {me && userInfo && me.id === userInfo.id ? null : alreadyFollow ? (
            <UnFollowBtnWrap>
              <UnFollowBtnName
                onClick={onClickUnFollow(userInfo && userInfo.id)}
              >
                언팔로우
              </UnFollowBtnName>
            </UnFollowBtnWrap>
          ) : (
            <FollowBtnWrap>
              <FollowBtnName onClick={onClickFollow(userInfo && userInfo.id)}>
                팔로우
              </FollowBtnName>
            </FollowBtnWrap>
          )}
          <AvatarWrap>
            <Avatar
              size="midLarge"
              img={userInfo && userInfo.img ? userInfo.img : false}
            />
          </AvatarWrap>
          <NicknameWrap>
            <Nickname>{userInfo && userInfo.nickname}</Nickname>
          </NicknameWrap>
        </UserInfoWrap>
        <UserFollowPostInfoWrap>
          <PostWrap>
            <Title>게시물</Title>
            <Number>{userInfo && userInfo.Posts}</Number>
          </PostWrap>
          <Link
            href={{
              pathname: "/followers",
              query: { id: userInfo && userInfo.id }
            }}
            key="followers"
            as={`/followers/${userInfo && userInfo.id}`}
          >
            <FollowWrap>
              <Title>팔로워</Title>
              <Number>{userInfo && userInfo.Followers}</Number>
            </FollowWrap>
          </Link>
          <Link
            href={{
              pathname: "/followings",
              query: { id: userInfo && userInfo.id }
            }}
            key="followings"
            as={`/followings/${userInfo && userInfo.id}`}
          >
            <FollowingWrap>
              <Title>팔로잉</Title>
              <Number>{userInfo && userInfo.Followings}</Number>
            </FollowingWrap>
          </Link>
        </UserFollowPostInfoWrap>
        <UserPostsWrap>
          {userPosts &&
            userPosts.map(post => (
              <PostCard
                key={post.id}
                post={post}
                showMenu={true}
                route="profile"
              />
            ))}
        </UserPostsWrap>
      </ProfileWrapper>
    </>
  );
});

Profile.getInitialProps = async context => {
  const id = context.query.id;
  // console.log("getInitialProps id", id);
  // const state = context.store.getState();
  // if (state.post.userPosts.length === 0) {
  //   context.store.dispatch({
  //     type: LOAD_USER_POSTS_REQUEST,
  //     data: id
  //   });
  // }
  context.store.dispatch({
    type: LOAD_USER_REQUEST,
    data: id
  });
  context.store.dispatch({
    type: LOAD_USER_POSTS_REQUEST,
    data: id
  });
  return { id };
};
export default Profile;
