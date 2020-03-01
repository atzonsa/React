import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Bruce Lee",
      age: 32
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>
          Lee was declared dead on arrival, at the age of {this.state.age}{" "}
        </h2>
      </div>
    );
  }
}

export default App;
