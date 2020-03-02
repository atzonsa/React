import React from "react";
import "./styles.css";
import Conditional from "./Conditional";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1500);
  }

  render() {
    return (
      <div className="App">
        <Conditional isLoading={this.state.isLoading} />
      </div>
    );
  }
}
