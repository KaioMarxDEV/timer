import { Scroll, Timer } from 'phosphor-react';
import { NavLink, useLocation } from 'react-router-dom';

import Logo from '../assets/Logo.svg';

const ActiveStyle = {
  color: 'rgb(0 179 126 / 1)',
  borderBottomColor: 'rgb(0 179 126 / 1)',
  boxShadow: 'inset 0 2px 4px 0 #00B37E',
  borderRadius: '8px',
  transform: 'translateY(-0.25rem)',
};

export function Header() {
  let { pathname } = useLocation();

  const isTimerActive = pathname === '/';
  const isHistoryActive = pathname === '/history';

  return (
    <header className="mt-10 mb-20 flex flex-row items-center justify-between px-10">
      <div className="active:-translate-y-1" />
      <img className="h-10 w-10" src={Logo} alt="Logo" />
      <nav className="flex flex-row items-center gap-2">
        <NavLink
          title="timer"
          to="/"
          style={isTimerActive ? ActiveStyle : {}}
          className="mx-3 my-2 flex items-center justify-center border-b-2 border-transparent py-1 px-2 text-gray-100 transition-all hover:text-green-300"
        >
          <Timer size={22} />
        </NavLink>
        <NavLink
          title="history"
          to="/history"
          style={isHistoryActive ? ActiveStyle : {}}
          className="mx-3 my-2 flex items-center justify-center border-b-2 border-transparent py-1 px-2 text-gray-100 transition-all hover:text-green-300"
        >
          <Scroll size={22} />
        </NavLink>
      </nav>
    </header>
  );
}
