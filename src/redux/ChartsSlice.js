import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getChart = createAsyncThunk(
  'Music/getChart',
  async () => {
    const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0?index=0&limit=50');
    const responseData = await response.data;
    return responseData.tracks;
    // return data;
  },
);

const initialState = [];
const ChartsSlice = createSlice({
  name: 'Chart',
  initialState,
  reducers: {},
  extraReducers: {
    [getChart.fulfilled]: ((state, action) => [...state, ...action.payload.data]),
  },
});
export default ChartsSlice.reducer;
export const ChatsAction = ChartsSlice.actions;
