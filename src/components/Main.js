import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Introduction from './Introduction';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/introduction' component={Introduction} />
      </Switch>
    );
  }
}

export default Main;
