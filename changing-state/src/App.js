import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
  }

  handleClick() {
    //console.log("clicked");

    this.setState({ count: 1 });
  }

  handleClickAdd() {
    //console.log("clicked");

    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Set state to 1</button>
        <button onClick={this.handleClickAdd}>Add</button>
      </div>
    );
  }
}
