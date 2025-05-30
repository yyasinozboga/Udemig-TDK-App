import {createSlice} from '@reduxjs/toolkit';
import {
  getDataFromHistory,
  addDataToHistory,
  deleteDataFromHistory,
} from '../actions/historyActions';

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

const historyDataSlice = createSlice({
  name: 'historyData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getDataFromHistory.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(getDataFromHistory.rejected, (state, {error}) => {
      state.isLoading = false;
      state.error = error.message;
    });

    builder.addCase(getDataFromHistory.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.data = payload;
    });

    builder.addCase(addDataToHistory.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(addDataToHistory.rejected, (state, {error}) => {
      state.isLoading = false;
      state.error = error.message;
    });

    builder.addCase(addDataToHistory.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      const foundIndex = state.data.findIndex(data => data.id === payload.id);
      if (foundIndex) {
        state.data.splice(foundIndex, 1);
      } else {
        state.data.push(payload);
      }
    });

    builder.addCase(deleteDataFromHistory.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(deleteDataFromHistory.rejected, (state, {error}) => {
      state.isLoading = false;
      state.error = error.message;
    });

    builder.addCase(deleteDataFromHistory.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.data = state.data.filter(data => data.id !== payload);
    });
  },
});

export default historyDataSlice.reducer;
