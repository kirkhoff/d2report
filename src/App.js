import React, { Component } from 'react';

import { ReactComponent as DestinyIcon } from './assets/icons/destiny.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DestinyIcon/>
          <h1 className="App-title">D2.report</h1>
        </header>
        <p className="App-intro">
          Coming soon...
        </p>
      </div>
    );
  }
}

export default App;
