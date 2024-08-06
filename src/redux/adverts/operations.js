import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAdverts = createAsyncThunk(
  'adverts/getAdverts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        'https://66b261191ca8ad33d4f78ae1.mockapi.io/adverts'
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
