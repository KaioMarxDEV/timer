import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header';

export function DefaultLayout() {
  return (
    <div className="mx-auto my-20 flex h-[80vh] max-w-[72rem] flex-col rounded-lg bg-gray-700">
      <Header />
      <Outlet />
    </div>
  );
}
