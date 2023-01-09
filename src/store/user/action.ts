import { createAction } from '@reduxjs/toolkit';
import { User } from '../../types';

export const ActionTypes = {
  FETCH_USERS: 'user/fetch',
  FETCH_USERS_SUCCESS: 'user/fetch-success',
  REGISTER_USER: 'user/register',
  REGISTER_USER_SUCCESS: 'user/register-success',
} as const;

export const fetchUsers = createAction(ActionTypes.FETCH_USERS);
export const fetchUsersSuccess = createAction<User[]>(ActionTypes.FETCH_USERS_SUCCESS);

export type RegisterUserAction = ReturnType<typeof registerUser>;
export const registerUser = createAction<Pick<User, 'name' | 'email' | 'age'>>(
  ActionTypes.REGISTER_USER
);

export const registerUserSuccess = createAction(ActionTypes.REGISTER_USER_SUCCESS);
