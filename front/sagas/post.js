import { all, fork, call, takeLatest, put } from "redux-saga/effects";
import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  LOAD_MAIN_POSTS_SUCCESS,
  LOAD_MAIN_POSTS_FAILURE,
  LOAD_MAIN_POSTS_REQUEST,
  LOAD_HASHTAG_POSTS_SUCCESS,
  LOAD_HASHTAG_POSTS_FAILURE,
  LOAD_HASHTAG_POSTS_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAILURE,
  LOAD_COMMENTS_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_FAILURE,
  EDIT_COMMENT_REQUEST
} from "../reducers/post";
import axios from "axios";

function editCommentAPI(commentData) {
  console.log("commentData", commentData);
  return axios.patch(
    `/comment/${commentData.commentId}`,
    { content: commentData.content },
    {
      withCredentials: true
    }
  );
}

function* editComment(action) {
  try {
    const result = yield call(editCommentAPI, action.data);
    console.log("Result", result);
    yield put({
      type: EDIT_COMMENT_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: EDIT_COMMENT_FAILURE,
      error: e
    });
  }
}
function* watchEditComment() {
  yield takeLatest(EDIT_COMMENT_REQUEST, editComment);
}

function deleteCommentAPI(commentId) {
  return axios.delete(`/comment/${commentId}`, {
    withCredentials: true
  });
}

function* deleteComment(action) {
  try {
    const result = yield call(deleteCommentAPI, action.data);
    console.log("Result", result);
    yield put({
      type: DELETE_COMMENT_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: DELETE_COMMENT_FAILURE,
      error: e
    });
  }
}
function* watchDeleteComment() {
  yield takeLatest(DELETE_COMMENT_REQUEST, deleteComment);
}

function addCommentAPI(commentData) {
  return axios.post(
    `/post/${commentData.postId}/comment`,
    { content: commentData.content },
    {
      withCredentials: true
    }
  );
}

function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.data);
    console.log("Result", result);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: e
    });
  }
}
function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function loadPostAPI(id) {
  return axios.get(`/Post/${id}`);
}

function* loadPost(action) {
  try {
    const result = yield call(loadPostAPI, action.data);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_POST_FAILURE,
      error: e
    });
  }
}
function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

function loadCommentsAPI(id) {
  return axios.get(`/comments/${id}`);
}

function* loadComments(action) {
  try {
    const result = yield call(loadCommentsAPI, action.data);
    yield put({
      type: LOAD_COMMENTS_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_COMMENTS_FAILURE,
      error: e
    });
  }
}
function* watchLoadComments() {
  yield takeLatest(LOAD_COMMENTS_REQUEST, loadComments);
}

function loadHashtagPostsAPI(tag) {
  return axios.get(`/hashtag/${encodeURIComponent(tag)}`);
}

function* loadHashtagPosts(action) {
  try {
    const result = yield call(loadHashtagPostsAPI, action.data);
    yield put({
      type: LOAD_HASHTAG_POSTS_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_HASHTAG_POSTS_FAILURE,
      error: e
    });
  }
}
function* watchLoadHashtagPosts() {
  yield takeLatest(LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
}

function loadMainPostsAPI() {
  return axios.get("/posts");
}

function* loadMainPosts(action) {
  try {
    const result = yield call(loadMainPostsAPI, action.data);
    yield put({
      type: LOAD_MAIN_POSTS_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_MAIN_POSTS_FAILURE,
      error: e
    });
  }
}
function* watchLoadMainPosts() {
  yield takeLatest(LOAD_MAIN_POSTS_REQUEST, loadMainPosts);
}

function addPostAPI(postData) {
  return axios.post("/post", postData, { withCredentials: true });
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: ADD_POST_FAILURE,
      error: e
    });
  }
}
function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}
export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchLoadMainPosts),
    fork(watchLoadHashtagPosts),
    fork(watchLoadComments),
    fork(watchLoadPost),
    fork(watchAddComment),
    fork(watchDeleteComment),
    fork(watchEditComment)
  ]);
}
