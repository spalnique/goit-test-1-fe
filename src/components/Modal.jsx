import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import { closeModal, selectModal } from '../redux/modal/slice.js';

import CamperInfo from './CamperInfo.jsx';

import css from '../styles/Modal.module.css';
import icons from '../assets/icons/icons.svg';

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
          <svg
            width={32}
            height={32}
            style={{
              position: 'absolute',
              top: 40,
              right: 40,
              cursor: 'pointer',
            }}
            onClick={handleClose}>
            <use xlinkHref={`${icons}#close`} />
          </svg>
        </>
      )}
    </ReactModal>
  );
};

export default Modal;
