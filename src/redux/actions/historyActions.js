import {createAsyncThunk} from '@reduxjs/toolkit';
import {jsonServer} from '../../api';

export const getDataFromHistory = createAsyncThunk(
  'historyData/getData',
  async () => {
    try {
      const res = await jsonServer.get('/historyData');
      return res.data;
    } catch (error) {
      throw error;
    }
  },
);

export const addDataToHistory = createAsyncThunk(
  'historyData/addData',
  async title => {
    try {
      await jsonServer.post('/historyData', {keyword: title, selected: false});
    } catch (error) {
      throw error;
    }
  },
);

export const deleteDataFromHistory = createAsyncThunk(
  'historyData/deleteData',
  async id => {
    try {
      await jsonServer.delete(`/historyData/${id}`);
    } catch (error) {
      throw error;
    }
  },
);
