import React, { Component } from 'react';

import PublicRoutes from './router';
import logo from './logo.svg'
import 'antd/dist/antd.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PublicRoutes />
      </div>
    );
  }
}

export default App;
