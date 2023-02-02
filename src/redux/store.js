import { configureStore, createSlice } from '@reduxjs/toolkit';
import state from './state';

export const infoSlice = createSlice({
  name: 'info',
  initialState: state,
  reducers: {},
  extraReducers: {},
});

const store = configureStore({
  reducer: infoSlice.reducer,
});

export default store;
