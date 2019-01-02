import React, { Component } from 'react';
import './App.css';

const MyContext = React.createContext()

class MyProvider extends Component {

  state = {
    name: "george",
    age: 44,
    cool: true
  }
  render() {
    return(
      <MyContext.Provider value={
        {
          state: this.state,
          growAYearOlder: () => this.setState({
            age: this.state.age+1
          })
        }
      }>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

class Family extends Component {
  render() {
    return (
        <Person />
      )
  }
}

class Person extends Component {
  render() {
    return (
        <div>
          <MyContext.Consumer>
            {(context) => (
              <div>
                <p>name: {context.state.name}</p>
                <p>age: {context.state.age}</p>
                <p>cool? { context.state.cool ? 'yep' : 'nope' }</p>
                <button onClick={context.growAYearOlder}>Grow Older</button>
              </div>
            )}
          </MyContext.Consumer>
        </div>
      )
  }
}

class App extends Component {

  render() {
    return (
      <MyProvider>
        <div className="App">
           <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
