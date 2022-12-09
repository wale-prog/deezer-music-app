import { configureStore } from '@reduxjs/toolkit';
import chartsReducer from './ChartsSlice';

const store = configureStore({
  reducer: {
    charts: chartsReducer,
  },
});
export default store;
