import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_POST_REQUEST, LOAD_COMMENTS_REQUEST } from "../reducers/post";
import PostCard from "../containers/PostCard";
import Router from "next/router";
import CommentForm from "../containers/CommentForm";
import CommentCard from "../containers/CommentCard";
import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";
import Theme from "../styles/Theme";
const LoadingWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: ${Theme.themeColor};
`;
const Comment = ({ id }) => {
  const dispatch = useDispatch();
  const {
    post,
    comments,
    isEditingComment,
    isAddingComment,
    isDeletingComment,
    isLoadingComments,
    isLoadedComments
  } = useSelector(state => state.post);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    dispatch({
      type: LOAD_COMMENTS_REQUEST,
      data:
        id ||
        (Router &&
          Router.router &&
          Router.router.query &&
          Router.router.query.tag)
    });
    dispatch({
      type: LOAD_POST_REQUEST,
      data:
        id ||
        (Router &&
          Router.router &&
          Router.router.query &&
          Router.router.query.tag)
    });
  }, []);
  useEffect(() => {
    if (isLoadedComments) {
      return;
    }
    if (
      isEditingComment ||
      isAddingComment ||
      isDeletingComment ||
      isLoadingComments
    ) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [
    isEditingComment,
    isAddingComment,
    isDeletingComment,
    isLoadingComments,
    isLoadedComments
  ]);
  return (
    <>
      {/* <PostCard showMenu={false} post={post} /> */}
      {isLoading && (
        <LoadingWrapper>
          <LoadingOutlined />
        </LoadingWrapper>
      )}

      <CommentForm
        postId={
          id ||
          (Router &&
            Router.router &&
            Router.router.query &&
            Router.router.query.tag)
        }
      />
      {comments &&
        comments.length > 0 &&
        !isLoading &&
        comments.map(comment => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
    </>
  );
};

Comment.getInitialProps = async context => {
  const id = context.query.id;
  return { id };
};
export default Comment;
