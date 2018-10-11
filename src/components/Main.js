import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Risk from './Risk';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/risk' component={Risk} />
      </Switch>
    );
  }
}

export default Main;
