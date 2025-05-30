import {createAsyncThunk} from '@reduxjs/toolkit';
import {jsonServer} from '../../api';

export const getDataFromSaved = createAsyncThunk(
  'savedData/getData',
  async () => {
    try {
      const res = await jsonServer.get('/savedData');
      return res.data;
    } catch (error) {
      throw error;
    }
  },
);

export const addDataToSaved = createAsyncThunk(
  'savedData/addData',
  async data => {
    try {
      const res = await jsonServer.post('/savedData', data);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
);

export const deleteDataFromSaved = createAsyncThunk(
  'savedData/deleteData',
  async id => {
    try {
      await jsonServer.delete(`/savedData/${id}`);
      return id;
    } catch (error) {
      throw error;
    }
  },
);
