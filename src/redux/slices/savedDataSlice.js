import {createSlice} from '@reduxjs/toolkit';
import {
  getDataFromSaved,
  addDataToSaved,
  deleteDataFromSaved,
} from '../actions/savedActions';

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

const savedDataSlice = createSlice({
  name: 'savedData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getDataFromSaved.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(getDataFromSaved.rejected, (state, {error}) => {
      state.isLoading = false;
      state.error = error.message;
    });

    builder.addCase(getDataFromSaved.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.data = payload;
    });

    builder.addCase(addDataToSaved.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(addDataToSaved.rejected, (state, {error}) => {
      state.isLoading = false;
      state.error = error.message;
    });

    builder.addCase(addDataToSaved.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.data.push(payload);
    });

    builder.addCase(deleteDataFromSaved.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(deleteDataFromSaved.rejected, (state, {error}) => {
      state.isLoading = false;
      state.error = error.message;
    });

    builder.addCase(deleteDataFromSaved.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.data = state.data.filter(data => data.id !== payload);
    });
  },
});

export default savedDataSlice.reducer;
