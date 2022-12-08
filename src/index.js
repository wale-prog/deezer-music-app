import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux/es/exports';
import { BrowserRouter, Link } from 'react-router-dom';
import App from './App';
import store from './redux';
import { getChart } from './redux/ChartsSlice';

store.dispatch(getChart());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Link to="/" />
      <App />
    </BrowserRouter>
  </Provider>,
);
