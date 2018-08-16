import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import configureStore from './store';
import { loadItems } from './actions/actions';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = configureStore();
store.dispatch(loadItems());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)
