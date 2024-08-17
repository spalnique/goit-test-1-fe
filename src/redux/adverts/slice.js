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
    selectFetch: (state) => state.fetch,
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
      if (!Object.keys(payload).length && !Object.keys(state.query).length) {
        return;
      }
      state.campers = [];
      state.nextCampers = [];
      state.page = 1;
      state.fetch = true;
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
      state.fetch = true;
      state.fetchNext = true;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAdverts.fulfilled, (state, action) => {
        state.campers = action.payload;
        state.fetch = false;
      })
      .addCase(getAdverts.rejected, (state) => {
        state.campers = [];
        state.fetch = false;
      })
      .addCase(getNextAdverts.fulfilled, (state, action) => {
        state.nextCampers = action.payload;
        state.fetchNext = false;
      })
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
    selectFetch,
    selectPage,
  },
  actions: { renderMore, setQuery, resetQuery },
  reducer: advertsReducer,
} = advertsSlice;
