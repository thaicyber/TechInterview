import React, { useState, useCallback, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LOAD_HASHTAG_POSTS_REQUEST,
  LOAD_HASHTAG_POSTS_INITIAL
} from "../reducers/post";
import styled from "styled-components";
import { Input } from "antd";
import { device } from "../styles/device";
const SearchWrapper = styled.div`
  margin-top: 100px;
  width: 100vw;

  @media ${device.tablet} {
    width: 600px;
  }
  @media ${device.laptop} {
    width: 950px;
  }
`;
const SearchResultCountWrap = styled.div`
  margin-top: 1rem;
`;
import PostCard from "../containers/PostCard";
const Search = () => {
  const { Search } = Input;
  const dispatch = useDispatch();
  const [searchTag, setSearchTag] = useState("");
  const { hashtagPosts } = useSelector(state => state.post);
  const inputTag = useRef();
  useEffect(() => {
    inputTag.current.focus();
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
      dispatch({ type: LOAD_HASHTAG_POSTS_INITIAL });
    };
  }, []);
  useEffect(() => {
    if (hashtagPosts.length === 0) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [hashtagPosts.length]);
  const onChangeSearchTag = useCallback(
    e => {
      setSearchTag(e.target.value);
      dispatch({
        type: LOAD_HASHTAG_POSTS_REQUEST,
        data: e.target.value.length === 0 ? null : e.target.value
      });
      // console.log("e.target.value", e.target.value);
    },
    [searchTag]
  );
  const onSubmitSearchTag = useCallback(
    e => {
      e.preventDefault();
      dispatch({
        type: LOAD_HASHTAG_POSTS_REQUEST,
        data: searchTag
      });
    },
    [searchTag]
  );
  return (
    <>
      <SearchWrapper>
        <div style={{ padding: "0 3rem" }}>
          <form onSubmit={onSubmitSearchTag}>
            <Search
              type="text"
              value={searchTag}
              onChange={onChangeSearchTag}
              style={{ width: "120px", height: "30px" }}
              ref={inputTag}
              style={{ width: "100%" }}
              placeholder="검색어를 입력해 주세요."
            />
          </form>
          <SearchResultCountWrap>
            <span>
              {hashtagPosts && hashtagPosts.length !== 0
                ? `총 ${hashtagPosts.length}개의 포스트를 찾았습니다.`
                : "검색결과가 없습니다."}
            </span>
          </SearchResultCountWrap>
        </div>
        {hashtagPosts &&
          hashtagPosts.length > 0 &&
          hashtagPosts.map(post => (
            <PostCard
              showMenu={true}
              post={post}
              key={post.id}
              route="hashtag"
            />
          ))}
      </SearchWrapper>
    </>
  );
};

export default Search;
