import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      unreadMessage: ["a", "b", "a", "b"]
    };
  }

  render() {
    return (
      this.state.unreadMessage.length > 0 && (
        <div>
          <h1>You have {this.state.unreadMessage.length} unread messages</h1>
        </div>
      )
    );
  }
}
