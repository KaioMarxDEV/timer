import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header';

export function DefaultLayout() {
  return (
    <div className="my-20 mx-auto flex max-w-6xl flex-col rounded-lg bg-gray-700">
      <Header />
      <Outlet />
    </div>
  );
}
