import React, { Component } from 'react';
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
  state = {
    name: "george",
    age: 44,
    cool: true
  }
  render() {
    return (
      <div className="App">
         <Family name={this.state.name} />
      </div>
    );
  }
}

export default App;
