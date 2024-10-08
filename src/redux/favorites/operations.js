import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://66b261191ca8ad33d4f78ae1.mockapi.io',
});

export const getFavorites = createAsyncThunk(
  'favorites/getFavorites',
  async (ids, thunkAPI) => {
    if (!ids || !ids.length) {
      return [];
    }

    try {
      const requests = ids.map((id) => instance.get(`/adverts/${id}`));
      const responses = await Promise.all(requests);
      const data = responses.map((response) => response.data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getNextFavorites = createAsyncThunk(
  'favorites/getNextFavorites',
  async (ids, thunkAPI) => {
    if (!ids || !ids.length) {
      return [];
    }

    try {
      const requests = ids.map((id) => instance.get(`/adverts/${id}`));
      const responses = await Promise.all(requests);
      const data = responses.map((response) => response.data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
