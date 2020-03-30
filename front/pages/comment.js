import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_POST_REQUEST, LOAD_COMMENTS_REQUEST } from "../reducers/post";
import PostCard from "../components/PostCard";
import Router from "next/router";
import CommentForm from "../components/CommentForm";
const comment = ({ id }) => {
  const dispatch = useDispatch();
  const { post } = useSelector(state => state.post);

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
  return (
    <>
      <PostCard showMenu={false} post={post} />
      <CommentForm
        postId={
          id ||
          (Router &&
            Router.router &&
            Router.router.query &&
            Router.router.query.tag)
        }
      />
    </>
  );
};

comment.getInitialProps = async context => {
  const id = context.query.id;
  return { id };
};
export default comment;
