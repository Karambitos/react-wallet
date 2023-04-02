import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import AppBar from '../AppBar/AppBar';
import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import { ModalTransaction } from '../ModalTransaction/ModalTransaction';
import { selectModalAddState } from 'redux/modalAddTransaction/selector';

export default function Layout() {
  const modalIsOpen = useSelector(selectModalAddState);

  return (
    <div className="mainContainer">
      <div className="blur"></div>
      <AppBar />
      <div className="pageWrapper contentMaxWidth">
        <div className="aside">
          <div className="navWrapper">
            <Navigation />
            <Balance />
          </div>
          <Currency />
        </div>
        <div className="main">
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
      <div>{modalIsOpen && <ModalTransaction />}</div>
    </div>
  );
}
