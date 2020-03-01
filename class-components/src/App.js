import React from "react";
import "./styles.css";

class App extends React.Component {
  myMethod() {
    let style = { color: "white", backgroundColor: "blue" };
    return style;
  }

  render() {
    const style = this.myMethod();
    return (
      <div style={style}>
        <h1>Code goes here</h1>
      </div>
    );
  }
}

export default App;
