import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return (
      <div>
        <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
      </div>
    );
  }
}
