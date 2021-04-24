import { configureStore } from '@reduxjs/toolkit';
import promiseMiddleware from 'redux-promise';
import Reducer from '../reducers/index';

const store = configureStore({
  reducer: Reducer,
  middleware: [promiseMiddleware],
});

export default store;
