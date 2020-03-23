import { all, fork, takeLatest, call, put } from "redux-saga/effects";
import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS
} from "../reducers/user";
import axios from "axios";

function LogInAPI(LogInData) {
  return axios.post("/user/login", LogInData);
}
function* LogIn(action) {
  try {
    const result = yield call(LogInAPI, action.data);
    console.log("result", result);
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
  yield takeLatest(LOG_IN_REQUEST, LogIn);
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
  yield all([fork(watchSignUp), fork(watchLogIn)]);
}
