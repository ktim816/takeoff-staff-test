import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import '@/styles/index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
