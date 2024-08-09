import storage from 'redux-persist/lib/storage';

export const initialState = {
  adverts: {
    campers: [],
    nextCampers: [],
    isLoading: false,
    error: null,
  },
  favorites: { ids: [], campers: [], nextCampers: [] },
  filters: {},
  modal: { isOpen: false, data: null },
};

export const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['ids'],
};

export const perPage = 4;
