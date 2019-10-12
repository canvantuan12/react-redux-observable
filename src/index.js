import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router';

import history from './utils/history';
import configureStore from './configureStore';
import App from './containers/App';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <App />
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
