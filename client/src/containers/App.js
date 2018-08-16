import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../containers/App.css';
import NavBar from '../components/NavBar';
import Signup from './Signup.js';
import Login from './Login';
import ItemsContainer from './ItemsContainer';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={App} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/items" component={ItemsContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
