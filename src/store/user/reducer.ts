import { createReducer } from '@reduxjs/toolkit';
import { User } from '../../types/user';
import { fetchUsers } from './action';

export type UserState = {
  loading: boolean;
  data: User[];
};

const initialState: UserState = {
  loading: false,
  data: [],
};

const reducer = createReducer<UserState>(initialState, {
  [fetchUsers.type]: (state) => state,
});

export default reducer;
