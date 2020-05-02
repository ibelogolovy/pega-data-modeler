import ReactDOM from 'react-dom';
import React from 'react';

import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './containers/app';
import ErrorBoundry from './components/error-boundry';

import store from './store';

import './index.css';

ReactDOM.render(
  <Provider store = { store }>
      <ErrorBoundry>
          <Router>
            <App/>
          </Router>
      </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);