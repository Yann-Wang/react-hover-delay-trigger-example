import React, { Component } from 'react';
import ReactHoverDelayTrigger from 'react-hover-delay-trigger';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: 0
    };
    this.handleHoverTrigger = this.handleHoverTrigger.bind(this);
  }
  handleHoverTrigger() {
    const result = this.state.result + 1;
    this.setState({ result });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>hover trigger count: {this.state.result}</p>
        <ReactHoverDelayTrigger
          delay={1100}
          handleHoverTrigger={this.handleHoverTrigger}
        >
          <span>677777</span>
        </ReactHoverDelayTrigger>
      </div>
    );
  }
}

export default App;
