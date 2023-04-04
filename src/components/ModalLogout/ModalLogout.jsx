import styles from './ModalLogout.module.scss';
import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authThunks';
import { clearTransactionsState } from 'redux/transactions/slice';

const modalRoot = document.querySelector('#modal-root');

export default function ModalLogout({ onClose }) {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', closeOnEscHandler);

    return () => {
      window.removeEventListener('keydown', closeOnEscHandler);
    };
    // eslint-disable-next-line
  }, []);

  const handleLogout = () => {
    dispatch(clearTransactionsState());
    dispatch(logoutUser());
    onClose();
  };

  function closeOnEscHandler(e) {
    if (e.code === 'Escape') {
      onClose();
    }
  }

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <h3 className={styles.title}>Are you sure?</h3>
        <p className={styles.text}>Confirm you want to Exit and Logout</p>
        <div className={styles.buttonsWrap}>
          <button
            type="button"
            className="button button--secondary"
            onClick={handleLogout}
          >
            Yes
          </button>
          <button type="button" className="button" onClick={() => onClose()}>
            No
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
