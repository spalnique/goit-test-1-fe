import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../constants.js';
import { getAdverts } from './operations.js';

const isFavorite = () =>
  state.favorites.some((favorite) => favorite._id === action.payload._id);

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: initialState.adverts,

  selectors: {
    selectAdverts: (state) => state.campers,
    selectFavorites: (state) => state.favorites,
    selectIsLoading: (state) => state.isLoading,
    selectError: (state) => state.error,
  },
  reducers: {
    addFavorite: (state, action) => {
      if (!isFavorite) {
        state.favorites.push(action.payload);
      }
    },
    deleteFavorite: (state, action) => {
      if (isFavorite) {
        state.favorites = state.favorites.filter(
          (favorite) => favorite._id === action.payload._id
        );
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAdverts.fulfilled, (state, action) => {
        state.campers.push(action.payload);
        state.isLoading = false;
      })
      .addCase(getAdverts.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getAdverts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const { selectAdverts, selectFavorites, selectIsLoading, selectError } =
  advertsSlice.selectors;
export const { addFavorite, deleteFavorite } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
