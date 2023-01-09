import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchUsersSuccess,
  ActionTypes as UserActionTypes,
  registerUserSuccess,
  RegisterUserAction,
} from './action';

export function* getAllUsers() {
  try {
    const { data } = yield call(axios, 'http://localhost:5174/users');
    yield put(fetchUsersSuccess(data));
  } catch (e) {
    // TODO: エラー時にアラートとかを出せるようにしたい
    console.error(e);
  }
}

async function registerUser({ name, email, age }: { name: string; email: string; age: number }) {
  await axios.post('http://localhost:5174/users', {
    name,
    email,
    age,
  });
}

export function* postRegisterUser(action: RegisterUserAction) {
  try {
    yield call(registerUser, action.payload);
    yield put(registerUserSuccess());
  } catch (e) {
    // TODO: エラー時にアラートとかを出せるようにしたい
    console.log(e);
  }
}

export default [
  takeLatest(UserActionTypes.FETCH_USERS, getAllUsers),
  takeLatest(UserActionTypes.REGISTER_USER, postRegisterUser),
];
