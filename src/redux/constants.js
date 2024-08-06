import storage from 'redux-persist/lib/storage';

export const initialState = {
  adverts: { campers: [], favorites: [], isLoading: false, error: null },
  filters: {},
  modal: { isOpen: false, data: null },
};

export const advertsPersistConfig = {
  key: 'adverts',
  storage,
  whitelist: ['favorites'],
};
