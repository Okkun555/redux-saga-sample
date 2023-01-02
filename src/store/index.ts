import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {},
  middleware: [sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
