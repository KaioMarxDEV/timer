import { Route, Routes } from 'react-router-dom';

import App from '../App';
import { HistoryPage } from './HistoryPage';
import { NoMatchPage } from './NoMatchPage';
import { TimerPage } from './TimerPage';

export function TimerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Route>
      <Route path="*" element={<NoMatchPage />} />
    </Routes>
  );
}
