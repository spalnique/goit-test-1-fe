import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../constants.js';
import { getAdverts, getNextAdverts } from './operations.js';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: initialState.adverts,

  selectors: {
    selectCampers: (state) => state.campers,
    selectNextCampers: (state) => state.nextCampers,
    selectIsLoading: (state) => state.isLoading,
    selectError: (state) => state.error,
  },
  reducers: {
    renderMore: (state) => {
      state.campers = [...state.campers, ...state.nextCampers];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAdverts.fulfilled, (state, { payload }) => {
        state.campers = [...payload];
        state.isLoading = false;
      })
      .addCase(getAdverts.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getAdverts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(getNextAdverts.fulfilled, (state, { payload }) => {
        state.nextCampers = [...payload];
        state.isLoading = false;
      })
      .addCase(getNextAdverts.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getNextAdverts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }),
});

export const {
  selectors: { selectCampers, selectNextCampers, selectIsLoading, selectError },
  actions: { renderMore },
  reducer: advertsReducer,
} = advertsSlice;
