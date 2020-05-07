import { all, fork, call, takeLatest, put, throttle } from "redux-saga/effects";
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
  EDIT_COMMENT_REQUEST,
  LIKE_POST_REQUEST,
  LIKE_POST_FAILURE,
  LIKE_POST_SUCCESS,
  UNLIKE_POST_SUCCESS,
  UNLIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST,
  LOAD_USER_POSTS_SUCCESS,
  LOAD_USER_POSTS_FAILURE,
  LOAD_USER_POSTS_REQUEST,
  LOAD_POST_LIKERS_SUCCESS,
  LOAD_POST_LIKERS_FAILURE,
  LOAD_POST_LIKERS_REQUEST,
  LOAD_COUNT_POSTS_SUCCESS,
  LOAD_COUNT_POSTS_FAILURE,
  LOAD_COUNT_POSTS_REQUEST
} from "../reducers/post";
import axios from "axios";

function loadCountPostsAPI() {
  return axios.get(`/posts/count`, {
    withCredentials: true
  });
}

function* loadCountPosts() {
  try {
    const result = yield call(loadCountPostsAPI);
    yield put({
      type: LOAD_COUNT_POSTS_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_COUNT_POSTS_FAILURE,
      error: e
    });
  }
}
function* watchLoadCountPosts() {
  yield takeLatest(LOAD_COUNT_POSTS_REQUEST, loadCountPosts);
}

function loadPostLikersAPI(postId) {
  return axios.get(`/post/${postId}/likers`, {
    withCredentials: true
  });
}

function* loadPostLikers(action) {
  try {
    const result = yield call(loadPostLikersAPI, action.data);
    yield put({
      type: LOAD_POST_LIKERS_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_POST_LIKERS_FAILURE,
      error: e
    });
  }
}
function* watchLoadPostLikers() {
  yield takeLatest(LOAD_POST_LIKERS_REQUEST, loadPostLikers);
}

function loadUserPostsAPI(userId) {
  return axios.get(`/user/${userId}/posts`, {
    withCredentials: true
  });
}

function* loadUserPosts(action) {
  try {
    const result = yield call(loadUserPostsAPI, action.data);
    yield put({
      type: LOAD_USER_POSTS_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_USER_POSTS_FAILURE,
      error: e
    });
  }
}
function* watchLoadUserPosts() {
  yield takeLatest(LOAD_USER_POSTS_REQUEST, loadUserPosts);
}

function unlikePostAPI(postId) {
  return axios.delete(`/post/${postId}/like`, {
    withCredentials: true
  });
}

function* unlikePost(action) {
  try {
    const result = yield call(unlikePostAPI, action.data);
    yield put({
      type: UNLIKE_POST_SUCCESS,
      data: {
        postId: action.data,
        userId: result.data.userId,
        route: action.route
      }
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: UNLIKE_POST_FAILURE,
      error: e
    });
  }
}
function* watchUnlikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

function likePostAPI(postId) {
  return axios.post(
    `/post/${postId}/like`,
    {},
    {
      withCredentials: true
    }
  );
}

function* likePost(action) {
  try {
    const result = yield call(likePostAPI, action.data);
    yield put({
      type: LIKE_POST_SUCCESS,
      data: {
        postId: action.data,
        userId: result.data.userId,
        route: action.route
      }
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LIKE_POST_FAILURE,
      error: e
    });
  }
}
function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePost);
}

function editCommentAPI(commentData) {
  console.log("editCommentAPI", commentData);
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

function deleteCommentAPI(commentId, postId) {
  return axios.delete(`post/${postId}/comment/${commentId}`, {
    withCredentials: true
  });
}

function* deleteComment(action) {
  try {
    const result = yield call(deleteCommentAPI, action.data, action.postId);
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
    { content: commentData.content, img: commentData.img },
    {
      withCredentials: true
    }
  );
}

function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.data);
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
  yield throttle(400, LOAD_POST_REQUEST, loadPost);
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
    const result = yield call(loadHashtagPostsAPI, action.data, action.lastId);
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
  yield throttle(400, LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
}

function loadMainPostsAPI(lastId = 0, limit = 10) {
  return axios.get(`/posts?lastId=${lastId}&limit=${limit}`);
}

function* loadMainPosts(action) {
  try {
    const result = yield call(loadMainPostsAPI, action.lastId);
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
  yield throttle(400, LOAD_MAIN_POSTS_REQUEST, loadMainPosts);
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
    fork(watchEditComment),
    fork(watchLikePost),
    fork(watchUnlikePost),
    fork(watchLoadUserPosts),
    fork(watchLoadPostLikers),
    fork(watchLoadCountPosts)
  ]);
}
