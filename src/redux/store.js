import {configureStore} from '@reduxjs/toolkit';
import historyDataSlice from './slices/historyDataSlice';
import savedDataSlice from './slices/savedDataSlice';

const store = configureStore({
  reducer: {
    history: historyDataSlice,
    saved: savedDataSlice,
  },
});

export default store;
