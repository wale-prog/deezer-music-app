import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getChart = createAsyncThunk(
  'Music/getChart',
  async () => {
    const response = await axios.get('https://0.0.0.0:1000/https://api.deezer.com/chart/0?index=0&limit=50');
    const responseData = await response.data;
    return responseData.tracks;
  },
);

const initialState = [];
const ChartsSlice = createSlice({
  name: 'Chart',
  initialState,
  reducers: {
    showSearch(state) {
      const nextState = [...state, { searchBar: true }];
      return nextState;
    },
    hideSearch(state) {
      const nextState = [...state, { searchBar: false }];
      return nextState;
    },
  },
  extraReducers: {
    [getChart.fulfilled]: ((state, action) => [...state, ...action.payload.data]),
  },
});
export default ChartsSlice.reducer;
export const ChatsAction = ChartsSlice.actions;
