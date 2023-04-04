import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import AppBar from '../AppBar/AppBar';
import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import { ModalTransaction } from '../ModalTransaction/ModalTransaction';
import { selectModalAddState } from 'redux/modalAddTransaction/selector';
import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';

export default function Layout() {
  const modalIsOpen = useSelector(selectModalAddState);
  const location = useLocation();

  const [isBalanceRender, setBalanceStatus] = useState(true);
  useEffect(() => {
    if (location.pathname === '/currency') {
      setBalanceStatus(false);
    } else {
      setBalanceStatus(true);
    }
  }, [location]);
  const isTabletOrDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });
  return (
    <div className="mainContainer">
      <div className="blur"></div>
      <AppBar />
      <div className="pageWrapper contentMaxWidth">
        <div className="aside">
          <div className="navWrapper">
            <Navigation />
            {isBalanceRender && <Balance />}
          </div>
          {isTabletOrDesktop && <Currency />}
        </div>
        <div className="main">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
      <div>{modalIsOpen && <ModalTransaction />}</div>
    </div>
  );
}
