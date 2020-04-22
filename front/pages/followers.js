import React from "react";
import { LOAD_FOLLOWERS_REQUEST } from "../reducers/user";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AnnounceWrap, IconWrapper, DescWrap, Desc } from "./likePosts";
import { MehOutlined } from "@ant-design/icons";
import Avatar from "../components/Util/Avatar";
const FollowersWrapper = styled.div``;
const FollowerWrap = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-auto-rows: 80px;
`;
const UserNicknameWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 1rem;
  padding-left: 0.5rem;
  font-weight: 400;
  align-items: center;
`;
const AvartarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
`;
const UserNickname = styled.span``;
const followers = ({ id }) => {
  const { followerList } = useSelector(state => state.user);
  return (
    <FollowersWrapper>
      {followerList ? (
        followerList.map(follower => {
          return (
            <FollowerWrap>
              <AvartarWrap>
                <Avatar size="smallLarge" />
              </AvartarWrap>
              <UserNicknameWrap>
                <UserNickname>{follower.nickname}</UserNickname>
              </UserNicknameWrap>
            </FollowerWrap>
          );
        })
      ) : (
        <AnnounceWrap>
          <IconWrapper>
            <MehOutlined
              style={{ fontSize: "50px", color: Theme.themeColor }}
            />
          </IconWrapper>
          <DescWrap>
            <Desc>팔로워가 없습니다.</Desc>
          </DescWrap>
        </AnnounceWrap>
      )}
    </FollowersWrapper>
  );
};
followers.getInitialProps = async context => {
  const id = context.query.id;
  context.store.dispatch({
    type: LOAD_FOLLOWERS_REQUEST,
    data: id
  });
  return { id };
};
export default followers;
