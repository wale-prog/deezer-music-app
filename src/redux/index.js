import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import chartsReducer from './ChartsSlice';

const store = configureStore({
  reducer: {
    charts: chartsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
