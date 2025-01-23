import React from 'react';
import ReactDOM from 'react-dom/client';
import { FIcon } from './component/FIcon';
// @ts-nocheck
// @ts-ignore
import { ICON_NAMES } from './icon-names.js'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  (
    <div className="container">
      {
        ICON_NAMES.map((a: any) => (
          <div className="item">
            <FIcon className="icon" name={a}></FIcon>
            <span className='name'>{a}</span>
          </div>
        ))
      }
    </div>)
);