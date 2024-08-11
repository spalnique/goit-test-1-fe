import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { perPage } from '../constants.js';

const instance = axios.create({
  baseURL: 'https://66b261191ca8ad33d4f78ae1.mockapi.io',
  params: { limit: perPage },
});

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

export const getFavorites = async (ids) => {
  if (!ids || !ids.length) {
    return [];
  }

  try {
    const requests = ids
      .filter((_, i) => i <= 3)
      .map((id) => instance.get(`/adverts/${id}`));

    const responses = await Promise.all(requests);
    const data = responses.map(({ data }) => data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
