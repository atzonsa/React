import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      personData: {}
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          isLoading: false,
          personData: data
        });
      });
  }

  render() {
    const text = this.state.isLoading
      ? "Loading..."
      : this.state.personData.name;

    return (
      <div className="App">
        <h1>{text}</h1>
      </div>
    );
  }
}
