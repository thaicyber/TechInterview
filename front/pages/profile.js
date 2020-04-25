import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LOAD_USER_REQUEST,
  FOLLOW_USER_REQUEST,
  UNFOLLOW_USER_REQUEST
} from "../reducers/user";
import styled, { css } from "styled-components";
import Avatar from "../components/Util/Avatar";
import { LOAD_USER_POSTS_REQUEST } from "../reducers/post";
import PostCard from "../components/PostCard";
import Theme from "../styles/Theme";
import Link from "next/link";
import Router from "next/router";
const ProfileWrapper = styled.div`
  display: grid;
  grid-template-rows: 182px 60px 1fr;
  min-height: 100vh;
`;
const UserInfoWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const UserFollowPostInfoWrap = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  display: flex;
`;
const UserPostsWrap = styled.div`
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
  right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border-radius: 20px;
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
const Profile = ({ id }) => {
  const dispatch = useDispatch();
  const { userInfo, me } = useSelector(state => state.user);
  const { userPosts } = useSelector(state => state.post);
  console.log("ROuet", Router.router);
  useEffect(() => {
    console.log("userInfo", userInfo);
    if (!userInfo) {
      console.log("useEffect userInfo", userInfo);
      console.log(
        Router &&
          Router.router &&
          Router.router.query &&
          Router.router.query.tag
      );
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
    <ProfileWrapper>
      <UserInfoWrap>
        {me && userInfo && me.id === userInfo.id ? null : alreadyFollow ? (
          <UnFollowBtnWrap>
            <UnFollowBtnName onClick={onClickUnFollow(userInfo && userInfo.id)}>
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
          <Avatar size="midLarge" />
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
              post={post}
              showMenu={true}
              key={post.id}
              route="profile"
            />
          ))}
      </UserPostsWrap>
    </ProfileWrapper>
  );
};

Profile.getInitialProps = async context => {
  const id = context.query.id;
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
