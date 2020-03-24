import { all, fork, call, takeLatest } from "redux-saga/effects";
import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE
} from "../reducers/post";
import axios from "axios";
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
  yield all([fork(watchAddPost)]);
}
