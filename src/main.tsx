import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { TimerRoutes } from './TimerRoutes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TimerRoutes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
