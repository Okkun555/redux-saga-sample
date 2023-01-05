import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user';
import rootSaga from './sagas';
import { UserState } from './user/reducer';

const sagaMiddleware = createSagaMiddleware();

export type State = {
  user: UserState;
};

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
