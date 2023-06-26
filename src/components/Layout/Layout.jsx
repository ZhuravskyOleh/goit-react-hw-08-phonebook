import Header from 'components/AppBar/AppBar';
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'


export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};