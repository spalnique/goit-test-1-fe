import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../constants.js';
import { getFavorites, getNextFavorites } from './operations.js';

const isFavorite = (ids, camperId) => ids.includes(camperId);

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialState.favorites,
  selectors: {
    selectFavoritesIds: (state) => state.ids,
    selectFavorites: (state) => state.campers,
    selectNextFavorites: (state) => state.nextCampers,
    selectFavoritesPage: (state) => state.page,
    selectLocationFilter: (state) => state.location,
  },
  reducers: {
    toggleFavorite: (state, { payload: camper }) => {
      const { ids, campers } = state;

      if (!isFavorite(ids, camper.id)) {
        state.ids = [camper.id, ...ids];
        state.campers = [camper, ...campers];
      }
      if (isFavorite(ids, camper.id)) {
        state.ids = ids.filter((id) => id !== camper.id);
        state.campers = campers.filter((item) => item.id !== camper.id);
      }
    },
    renderMoreFavorites: (state) => {
      state.campers = [...state.campers, ...state.nextCampers];
      state.nextCampers = [];
      state.page += 1;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    setLocationFilter: (state, { payload }) => {
      state.location = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFavorites.fulfilled, (state, { payload }) => {
        state.campers = payload;
      })
      .addCase(getNextFavorites.fulfilled, (state, { payload }) => {
        state.nextCampers = payload;
      });
  },
});

export const {
  selectors: {
    selectFavoritesIds,
    selectFavorites,
    selectNextFavorites,
    selectFavoritesPage,
  },
  actions: { toggleFavorite, renderMoreFavorites, setPage },
  reducer: favoritesReducer,
} = favoritesSlice;
