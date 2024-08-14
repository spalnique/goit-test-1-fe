import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../constants.js';
import { getAdverts, getNextAdverts } from './operations.js';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: initialState.adverts,

  selectors: {
    selectQuery: (state) => state.query,
    selectCampers: (state) => state.campers,
    selectNextCampers: (state) => state.nextCampers,
    selectFetchNext: (state) => state.fetchNext,
    selectPage: (state) => state.page,
  },
  reducers: {
    renderMore: (state) => {
      state.campers = [...state.campers, ...state.nextCampers];
      state.nextCampers = [];
      state.page += 1;
      state.fetchNext = true;
    },
    setQuery: (state, { payload }) => {
      if (!Object.keys(payload).length) {
        return;
      }
      state.campers = [];
      state.nextCampers = [];
      state.page = 1;
      state.fetchNext = true;
      state.query = payload;
    },
    resetQuery: (state) => {
      if (!Object.keys(state.query).length) {
        return;
      }
      state.page = 1;
      state.query = {};
      state.campers = [];
      state.nextCampers = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAdverts.fulfilled, (state, { payload }) => {
        state.campers = payload;
      })
      // .addCase(getAdverts.pending, (state) => {})
      .addCase(getAdverts.rejected, (state) => {
        state.campers = [];
      })
      .addCase(getNextAdverts.fulfilled, (state, { payload }) => {
        state.nextCampers = [...payload];
        state.fetchNext = false;
      })
      // .addCase(getNextAdverts.pending, (state) => {})
      .addCase(getNextAdverts.rejected, (state) => {
        state.nextCampers = [];
        state.fetchNext = false;
      }),
});

export const {
  selectors: {
    selectQuery,
    selectCampers,
    selectNextCampers,
    selectFetchNext,
    selectPage,
  },
  actions: { renderMore, setQuery, resetQuery },
  reducer: advertsReducer,
} = advertsSlice;
