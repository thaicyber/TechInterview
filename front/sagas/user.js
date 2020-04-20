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
  UPLOAD_PROFILE_IMAGE_SUCCESS
} from "../reducers/user";
import axios from "axios";

function uploadUserProfileImageAPI(formData) {
  return axios.post(`/user/image`, formData, { withCredentials: true });
}
function* uploadUserProfileImage(action) {
  try {
    const result = yield call(uploadUserProfileImageAPI, action.data);
    console.log("result", result);
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
    console.log("result", result);
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
    fork(watchUploadUserProfileImage)
  ]);
}
