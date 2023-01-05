import { createAction } from '@reduxjs/toolkit';
import { User } from '../../types';

export const ActionTypes = {
  FETCH_USERS: 'user/fetch',
  FETCH_USERS_SUCCESS: 'user/fetch-success',
} as const;

export const fetchUsers = createAction(ActionTypes.FETCH_USERS);
export const fetchUsersSuccess = createAction<User[]>(ActionTypes.FETCH_USERS_SUCCESS);
