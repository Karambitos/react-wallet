import AppBar from '../AppBar/AppBar';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ModalTransaction } from '../ModalTransaction/ModalTransaction';
import { selectModalAddState } from 'redux/modalAddTransaction/selector';

export default function Layout() {
  const modalIsOpen = useSelector(selectModalAddState);
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="contentMaxWidth">
          <Outlet />
        </div>
      </Suspense>
      <div>{modalIsOpen && <ModalTransaction />}</div>
    </>
  );
}
