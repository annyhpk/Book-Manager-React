import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './layout/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './modules/store';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  );
} else {
  throw new Error('root를 찾지 못했습니다.');
}
