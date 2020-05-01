import React, { useState, useCallback, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_HASHTAG_POSTS_REQUEST } from "../reducers/post";
import PostCard from "../containers/PostCard";
const Search = () => {
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
      console.log("e.target.value", e.target.value);
    },
    [searchTag]
  );
  const onSubmitSearchTag = useCallback(() => {}, []);
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <form onSubmit={onSubmitSearchTag}>
          <input
            type="text"
            value={searchTag}
            onChange={onChangeSearchTag}
            style={{ width: "120px", height: "30px" }}
            ref={inputTag}
          />
        </form>
        <span>{hashtagPosts && hashtagPosts.length}</span>
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
      </div>
    </>
  );
};

export default Search;
