import React from 'react';
import ReactModal from 'react-modal';
import css from '../styles/Modal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, selectModal } from '../redux/modal/slice.js';

const Modal = () => {
  ReactModal.setAppElement('#root');

  const { isOpen, data } = useSelector(selectModal);
  const dispatch = useDispatch();

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => {
        dispatch(closeModal());
      }}
      // overlayClassName={css.modalOverlay}
      // className={css.modalContainer}
      // bodyOpenClassName={css.noScroll}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}>
      <div>{data?.name}</div>
    </ReactModal>
  );
};

export default Modal;
