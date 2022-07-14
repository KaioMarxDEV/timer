import { Scroll, Timer } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/Logo.svg';

export function Header() {
  return (
    <header className="mt-10 mb-20 flex flex-row items-center justify-between px-10">
      <img className="h-10 w-10" src={Logo} alt="Logo" />
      <nav className="flex flex-row items-center gap-2">
        <NavLink
          title="timer"
          to="/"
          className="mx-3 my-2 flex items-center justify-center border-b-2 border-transparent py-0.5 px-1 text-gray-100 transition-all hover:text-green-300 focus:-translate-y-1 focus:border-b-green-300 focus:text-green-300"
        >
          <Timer size={22} />
        </NavLink>
        <NavLink
          title="history"
          to="/history"
          className="mx-3 my-2 flex items-center justify-center border-b-2 border-transparent py-0.5 px-1 text-gray-100 transition-all hover:text-green-300 focus:-translate-y-1 focus:border-b-green-300 focus:text-green-300"
        >
          <Scroll size={22} />
        </NavLink>
      </nav>
    </header>
  );
}
