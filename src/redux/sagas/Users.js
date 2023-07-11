import { takeLatest, call, put } from "redux-saga/effects";
import { getUsersSuccess, getUsersFailure } from "../actions/Users";
import * as actionTypes from "../constants/Users";
import userService from "services/UsersService";

function* getUsers() {
  try {
    const response = yield call(userService.getUsers);
    debugger
    yield put(getUsersSuccess(response));
  } catch (error) {
    yield put(getUsersFailure(error.message));
  }
}

function* deleteClientSaga(action) {
  try {
    yield put({ type: "DELETE_CLIENT_SUCCESS" });
  } catch (error) {
    yield put({ type: "DELETE_CLIENT_FAILURE", payload: error.message });
  }
}
function* updateClientSaga(action) {
  try {
    yield put({ type: "UPDATE_CLIENT_SUCCESS" });
  } catch (error) {
    yield put({ type: "UPDATE_CLIENT_FAILURE", payload: error.message });
  }
}

export default function* rootSaga() {
  yield takeLatest(actionTypes.GET_USERS_REQUEST, getUsers);
  yield takeLatest(actionTypes.DELETE_CLIENT_REQUEST, deleteClientSaga);
  yield takeLatest(actionTypes.UPDATE_CLIENT_REQUEST, updateClientSaga);
}
