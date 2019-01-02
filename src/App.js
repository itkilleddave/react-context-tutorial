import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Family extends Component {
  render() {
    return (
        <Person name={this.props.name} />
      )
  }
}

class Person extends Component {
  render() {
    return (
        <h1>hello {this.props.name}</h1>
      )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
         <Family name="george" />
      </div>
    );
  }
}

export default App;
