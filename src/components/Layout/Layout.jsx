import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar/AppBar';

import MUI from 'components/MUI';

export default function Layout() {
  return (
    <>
      <AppBar />
      <MUI.Container sx={{ marginTop: '120px' }}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </MUI.Container>
    </>
  );
}
