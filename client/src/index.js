import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './containers/App';
import rootReducer from './reducers'
import itemsContainer from './containers/itemsContainer';
import './index.css';
import './semantic-ui/semantic.min.css';
import history from './history';


const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk)
);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/items" component={itemsContainer} />
        <Route path="/" render={() => (
          <Redirect to="/items"/>
        )}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
