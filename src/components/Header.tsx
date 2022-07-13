import { Scroll, Timer } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/Logo.svg';

export function Header() {
  return (
    <header className="mt-10 mb-20 flex flex-row items-center justify-between px-10">
      <img className="h-10 w-10" src={Logo} alt="Logo" />
      <nav className="flex flex-row items-center gap-2">
        <NavLink
          to="/timer"
          className="mx-3 my-2 flex items-center justify-center py-0.5 px-1 focus:rounded-xl focus:text-green-300"
        >
          <Timer size={22} />
        </NavLink>
        <NavLink
          to="/history"
          className="mx-3 my-2 flex items-center justify-center py-0.5 px-1 focus:rounded-xl focus:text-green-300"
        >
          <Scroll size={22} />
        </NavLink>
      </nav>
    </header>
  );
}
