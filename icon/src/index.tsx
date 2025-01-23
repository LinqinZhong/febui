import React from 'react';
import ReactDOM from 'react-dom/client';
import { FIcon } from './component/FIcon';
// @ts-nocheck
// @ts-ignore
import { ICON_NAMES } from './icon-names.js'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  (
    <div>
      {
        ICON_NAMES.map((a: any) => (<FIcon name={a}></FIcon>))
      }
    </div>)
);