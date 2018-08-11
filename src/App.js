import React, { Component } from 'react';

import { ReactComponent as DestinyIcon } from './assets/icons/destiny.svg';
import './App.css';
import Crucible from "./Crucible/Crucible";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DestinyIcon/>
          <h1 className="App-title">D2.report</h1>
        </header>
        <Crucible/>
      </div>
    );
  }
}

export default App;
