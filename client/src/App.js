import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path='/menu' component={menu}/>
          <Route path='/order' component={order}/>
        </div>
      </Router>
    );
  }
}

export default App;
