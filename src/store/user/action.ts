import { createAction } from '@reduxjs/toolkit';

export const ActionTypes = {
  FETCH_USERS: 'user/fetch',
} as const;

export const fetchUsers = createAction(ActionTypes.FETCH_USERS);

export type UserActions = typeof fetchUsers;
