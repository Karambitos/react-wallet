import AppBar from '../AppBar/AppBar';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="contentMaxWidth">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </Suspense>
    </>
  );
}
