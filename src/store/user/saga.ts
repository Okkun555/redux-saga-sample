import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUsersSuccess, ActionTypes as UserActionTypes } from './action';

export function* getAllUsers() {
  try {
    const { data } = yield call(axios, 'http://localhost:5174/users');
    yield put(fetchUsersSuccess(data));
  } catch (e) {
    // TODO: エラー時にアラートとかを出せるようにしたい
    console.error(e);
  }
}

export default [takeLatest(UserActionTypes.FETCH_USERS, getAllUsers)];
