import { Route, Routes } from 'react-router-dom';

import App from '../App';
import { Home } from './Home';

export function TimerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
