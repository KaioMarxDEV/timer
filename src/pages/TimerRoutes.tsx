import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from '../Layouts/DefaultLayout';
import { HistoryPage } from './HistoryPage';
import { NoMatchPage } from './NoMatchPage';
import { TimerPage } from './TimerPage';

export function TimerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<TimerPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Route>
      <Route path="*" element={<NoMatchPage />} />
    </Routes>
  );
}
