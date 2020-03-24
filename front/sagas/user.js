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
  LOAD_COMPANIES_REQUEST
} from "../reducers/user";
import axios from "axios";

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
  return axios.post("/user/logout");
}
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
    fork(watchLoadCompanies)
  ]);
}
