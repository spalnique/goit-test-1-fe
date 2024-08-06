import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAdverts = createAsyncThunk(
  'adverts/getAdverts',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://66b261191ca8ad33d4f78ae1.mockapi.io/adverts'
      );
      console.log('response =', response);
      return response;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
