import React, { useEffect, useRef, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd";
import {
  LOAD_HASHTAG_POSTS_INITIAL,
  LOAD_HASHTAG_POSTS_REQUEST
} from "../../reducers/post";
import { SearchContentWrap, SearchResultCountWrap } from "./style";
const SearchForm = () => {
  const { Search } = Input;
  const dispatch = useDispatch();
  const [searchTag, setSearchTag] = useState("");
  const { hashtagPosts } = useSelector(state => state.post);
  const inputTag = useRef();
  useEffect(() => {
    inputTag.current.focus();
  }, []);
  const onChangeSearchTag = useCallback(
    e => {
      setSearchTag(e.target.value);
      dispatch({
        type: LOAD_HASHTAG_POSTS_REQUEST,
        data: e.target.value.length === 0 ? null : e.target.value
      });
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
    <SearchContentWrap>
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
    </SearchContentWrap>
  );
};

export default SearchForm;
