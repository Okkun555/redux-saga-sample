import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/user';
import { fetchUsers, fetchUsersSuccess } from './action';

export type UserState = {
  loading: boolean;
  data: User[];
};

const initialState: UserState = {
  loading: false,
  data: [],
};

const reducer = createReducer<UserState>(initialState, {
  [fetchUsers.type]: (state) => {
    return {
      ...state,
      loading: true,
    };
  },
  [fetchUsersSuccess.type]: (state, action: PayloadAction<User[]>) => {
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  },
});

export default reducer;
