import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>(React) Google Books Search</h2>
          <p1>Search for and Save Books of Interest</p1>
        </div>
        <p className="App-intro">
          You can enter text here.
        </p>
      </div>
    );
  }
}

export default App;
