import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Home';
import History   from './History';


class App extends Component {
  render() {
    return (

      <div className="App">
          <div className="navbar">
            <NavLink exact to="/">HOME</NavLink>
            <NavLink to="/history">HISTORY</NavLink>
          </div>
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/history" component={History} />
          </Switch>
            
      </div>
    );
  }
}

export default App;
