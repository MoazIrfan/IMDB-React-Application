import React from 'react';
import ReactDOM from 'react-dom';

// Redux stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import App from './components/App/App';
import reducers from './reducers';

import './index.css';

const storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={storeWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root')
);