import React from 'react';
import ReactDOM from 'react-dom/client';
import './theme/canon/index'
import { ButtonTest } from './test/button';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ButtonTest/>
  </React.StrictMode>
);
