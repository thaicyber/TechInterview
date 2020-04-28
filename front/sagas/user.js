import { all, fork, takeLatest, call, put } from "redux-saga/effects";
import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_OUT_REQUEST,
  LOG_OUT_FAILURE,
  LOG_OUT_SUCCESS,
  LOAD_COMPANIES_SUCCESS,
  LOAD_COMPANIES_FAILURE,
  LOAD_COMPANIES_REQUEST,
  LOAD_USER_REQUEST,
  LOAD_USER_FAILURE,
  LOAD_USER_SUCCESS,
  UPLOAD_PROFILE_IMAGE_FAILURE,
  UPLOAD_PROFILE_IMAGE_REQUEST,
  UPLOAD_PROFILE_IMAGE_SUCCESS,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILURE,
  FOLLOW_USER_REQUEST,
  UNFOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_FAILURE,
  UNFOLLOW_USER_REQUEST,
  LOAD_FOLLOWERS_SUCCESS,
  LOAD_FOLLOWERS_FAILURE,
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWINGS_SUCCESS,
  LOAD_FOLLOWINGS_FAILURE,
  LOAD_FOLLOWINGS_REQUEST
} from "../reducers/user";
import axios from "axios";
function loadFollowingsAPI(userId) {
  return axios.get(`/user/${userId}/followings`, { withCredentials: true });
}
function* loadFollowings(action) {
  try {
    const result = yield call(loadFollowingsAPI, action.data);
    yield put({
      type: LOAD_FOLLOWINGS_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_FOLLOWINGS_FAILURE,
      error: e
    });
  }
}
function* watchLoadFollowings() {
  yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
}

function loadFollowersAPI(userId) {
  return axios.get(`/user/${userId}/followers`, { withCredentials: true });
}
function* loadFollowers(action) {
  try {
    const result = yield call(loadFollowersAPI, action.data);
    yield put({
      type: LOAD_FOLLOWERS_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_FOLLOWERS_FAILURE,
      error: e
    });
  }
}
function* watchLoadFollowers() {
  yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}

function unFollowUserAPI(userId) {
  return axios.delete(`/user/${userId}/follow`, { withCredentials: true });
}
function* unFollowUser(action) {
  try {
    const result = yield call(unFollowUserAPI, action.data);
    yield put({
      type: UNFOLLOW_USER_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: UNFOLLOW_USER_FAILURE,
      error: e
    });
  }
}
function* watchUnFollowUser() {
  yield takeLatest(UNFOLLOW_USER_REQUEST, unFollowUser);
}

function followUserAPI(userId) {
  return axios.post(`/user/${userId}/follow`, {}, { withCredentials: true });
}
function* followUser(action) {
  try {
    const result = yield call(followUserAPI, action.data);
    yield put({
      type: FOLLOW_USER_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: FOLLOW_USER_FAILURE,
      error: e
    });
  }
}
function* watchFollowUser() {
  yield takeLatest(FOLLOW_USER_REQUEST, followUser);
}

function uploadUserProfileImageAPI(formData) {
  return axios.post(`/user/image`, formData, { withCredentials: true });
}
function* uploadUserProfileImage(action) {
  try {
    const result = yield call(uploadUserProfileImageAPI, action.data);
    yield put({
      type: UPLOAD_PROFILE_IMAGE_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: UPLOAD_PROFILE_IMAGE_FAILURE,
      error: e
    });
  }
}
function* watchUploadUserProfileImage() {
  yield takeLatest(UPLOAD_PROFILE_IMAGE_REQUEST, uploadUserProfileImage);
}

function loadUserAPI(userId) {
  return axios.get(userId ? `/user/${userId}` : "/user", {
    withCredentials: true
  });
  // front session cookie를 서버에 보냄
}

function* loadUser(action) {
  try {
    const result = yield call(loadUserAPI, action.data);
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data,
      me: !action.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_USER_FAILURE,
      error: e
    });
  }
}
function* watchLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

function loadCompaniesAPI() {
  return axios.get("/users");
}
function* loadCompanies() {
  try {
    const result = yield call(loadCompaniesAPI);
    yield put({
      type: LOAD_COMPANIES_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_COMPANIES_FAILURE,
      error: e
    });
  }
}
function* watchLoadCompanies() {
  yield takeLatest(LOAD_COMPANIES_REQUEST, loadCompanies);
}

function LogOutAPI() {
  return axios.post("/user/logout", {}, { withCredentials: true });
}
// data가 없더라도 빈 객체 넣어줘야함.
// 주소/데이터/설정
function* logOut(action) {
  try {
    yield call(LogOutAPI, action.data);
    yield put({
      type: LOG_OUT_SUCCESS
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_OUT_FAILURE
    });
  }
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function logInAPI(logInData) {
  return axios.post("/user/login", logInData, {
    withCredentials: true
  });
}
function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE
    });
  }
}
function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
function signUpAPI(signUpData) {
  return axios.post("/user/", signUpData);
}
function* signUp(action) {
  try {
    yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE
    });
  }
}
function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
export default function* userSaga() {
  yield all([
    fork(watchSignUp),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchLoadCompanies),
    fork(watchLoadUser),
    fork(watchUploadUserProfileImage),
    fork(watchFollowUser),
    fork(watchUnFollowUser),
    fork(watchLoadFollowers),
    fork(watchLoadFollowings)
  ]);
}
