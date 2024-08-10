import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../constants.js';

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState.modal,
  selectors: { selectModal: (state) => state },
  reducers: {
    openModal: (state, { payload }) => {
      state.camper = payload;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.camper = null;
    },
  },
});

export const {
  actions: { openModal, closeModal },
  selectors: { selectModal },
  reducer: modalReducer,
} = modalSlice;
