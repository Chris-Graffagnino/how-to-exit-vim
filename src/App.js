import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="AppTitle">How to Exit Vim</h1>
        <div className="Container">
          <div className="Card">
            <h2>:wq</h2>
            <p>write quit</p>
          </div>
          <div className="Card">
            <h2>:q!</h2>
            <p>quit without saving</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
