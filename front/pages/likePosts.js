import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import { FileExclamationOutlined, MehOutlined } from "@ant-design/icons";
import Theme from "../styles/Theme";
import styled from "styled-components";
import { LOAD_MAIN_POSTS_REQUEST } from "../reducers/post";
const AnnounceWrap = styled.div``;
const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 200px;
  justify-content: center;
`;
const DescWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Desc = styled.span`
  margin-top: 30px;
`;
const likePosts = () => {
  const { mainPosts } = useSelector(state => state.post);
  const { me } = useSelector(state => state.user);
  let isExistLikePosts = false;
  const isExistLikePostsCheck = () => {
    if (me) {
      mainPosts.forEach(post => {
        post.Likers.forEach(v => {
          if (v.id === me.id) {
            isExistLikePosts = true;
          }
        });
      });
    }
  };
  isExistLikePostsCheck();

  return (
    <>
      {isExistLikePosts ? (
        mainPosts &&
        me &&
        mainPosts.map(
          post =>
            post.Likers &&
            post.Likers.length > 0 &&
            post.Likers.map(v => {
              v.id === me.id;
              return <PostCard showMenu={true} post={post} key={post.id} />;
            })
        )
      ) : (
        <AnnounceWrap>
          <IconWrapper>
            <MehOutlined
              style={{ fontSize: "50px", color: Theme.themeColor }}
            />
          </IconWrapper>
          <DescWrap>
            <Desc>좋아요 게시글이 없습니다.</Desc>
          </DescWrap>
        </AnnounceWrap>
      )}
    </>
  );
};
likePosts.getInitialProps = async context => {
  context.store.dispatch({
    type: LOAD_MAIN_POSTS_REQUEST
  });
};
export default likePosts;
