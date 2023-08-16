import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyled } from './GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyled/>
    <div>Test</div>
  </React.StrictMode>
);
