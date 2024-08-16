import storage from 'redux-persist/lib/storage';

export const initialState = {
  adverts: {
    campers: [],
    nextCampers: [],
    fetchNext: true,
    query: {},
    page: 1,
  },
  favorites: { ids: [], campers: [], nextCampers: [] },
  modal: { isOpen: false, camper: null },
};

export const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['ids'],
};

export const perPage = 4;
