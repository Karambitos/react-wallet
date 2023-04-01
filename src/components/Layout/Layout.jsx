import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from '../AppBar/AppBar';
import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
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
        ОТКРОЙ МЕНЯ
      </button>
      <AppBar />

      <div className="pageWrapper contentMaxWidth">
        <div className="aside">
          <Navigation />
          <Balance />
          <Currency />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="contentMaxWidth">
            <Outlet />
          </div>
        </Suspense>
      </div>
      <div>
        <ModalTransaction />
      </div>
    </>
  );
}
