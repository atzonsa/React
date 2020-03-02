import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return { isLoggedIn: !prevState.isLoggedIn };
    });

    console.log(this.state.isLoggedIn);
  }

  render() {
    let buttonText = this.state.isLoggedIn ? "out" : "in";
    let displayText = this.state.isLoggedIn ? "in" : "out";
    return (
      <div className="App">
        <h1>Hello Ankit, you are logged {displayText}</h1>
        <button onClick={this.handleClick}>Log {buttonText}</button>
      </div>
    );
  }
}
