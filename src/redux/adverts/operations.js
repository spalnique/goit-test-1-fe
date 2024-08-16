import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { perPage } from '../constants.js';

const instance = axios.create({
  baseURL: 'https://66b261191ca8ad33d4f78ae1.mockapi.io',
  params: { limit: perPage },
});

instance.interceptors.response.use(
  (response) => response,
  (error) =>
    error.response && error.response.status === 404
      ? Promise.resolve({ data: [] })
      : Promise.reject(error)
);

export const getAdverts = createAsyncThunk(
  'adverts/getAdverts',
  async ({ page, query }, thunkAPI) => {
    try {
      const { data } = await instance.get('/adverts', {
        params: { page, ...query },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getNextAdverts = createAsyncThunk(
  'adverts/getNextAdverts',
  async ({ page, query }, thunkAPI) => {
    try {
      const { data } = await instance.get('/adverts', {
        params: { page: page + 1, ...query },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
