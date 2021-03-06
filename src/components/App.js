import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import '../styles/custom.scss';

class App extends Component {
  render() {
    return (
      <div className="d-flex align-items-stretch w-100">
        {/* Sidebar Component */}
        <Sidebar />
        <div className="bg-light w-100 p-5">
          {/* Main Component */}
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
