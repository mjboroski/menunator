import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import manageItems from './reducers/manageItems'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(manageItems)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)
