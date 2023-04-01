import AppBar from '../AppBar/AppBar';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setModalAddTransactionOpen } from 'redux/modalAddTransaction/slice';
import { ModalTransaction } from '../ModalTransaction/ModalTransaction';

export default function Layout() {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(setModalAddTransactionOpen(true));
  };

  return (
    <>
      <button type="button" onClick={handleOpenModal}>
        Открой меня!
      </button>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="contentMaxWidth">
          <Outlet />
        </div>
      </Suspense>
      <div>
        <ModalTransaction />
      </div>
    </>
  );
}
