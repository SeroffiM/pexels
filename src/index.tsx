import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { store } from './store/store';
import { BrowserRouter as Router } from 'react-router-dom';

const getNavigatorLanguage = () => {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  } else {
    return navigator.language || 'en';
  }
};

console.log(getNavigatorLanguage());

import './i18n';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </Provider>
  </Router>,
  document.getElementById('root')
);
