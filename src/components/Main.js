import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Risk from './Risk';
import Files from './Files';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/risk' component={Risk} />
        <Route exact path='/files' component={Files} />
      </Switch>
    );
  }
}

export default Main;
