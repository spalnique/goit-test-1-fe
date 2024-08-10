import React from 'react';
import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import { closeModal, selectModal } from '../redux/modal/slice.js';

import css from '../styles/Modal.module.css';
import CamperInfo from './CamperInfo.jsx';

const Modal = () => {
  ReactModal.setAppElement('#root');

  const { isOpen, camper } = useSelector(selectModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      overlayClassName={css.modalOverlay}
      className={css.modalContainer}
      bodyOpenClassName={css.noScroll}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}>
      {camper && (
        <>
          <CamperInfo camper={camper} />
          <button
            type="button"
            style={{
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              top: 40,
              right: 40,
              width: 40,
              height: 40,
              color: '#101828',
            }}
            onClick={handleClose}>
            x
          </button>
        </>
      )}
    </ReactModal>
  );
};

export default Modal;
