import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="atzonsa" />
        <Greetings />
      </div>
    );
  }
}

class Header extends React.Component {
  render(props) {
    return <header>Welcome! {this.props.username}</header>;
  }
}

class Greetings extends React.Component {
  render() {
    const date = new Date();
    let hours = date.getHours();
    let timeOfDay;
    let h5Style = {};

    if (hours < 12) {
      timeOfDay = "morning";
      h5Style.color = "orange";
    } else if (hours > 12 && hours <= 17) {
      timeOfDay = "afternoon";
      h5Style.color = "green";
    } else {
      timeOfDay = "night";
      h5Style.color = "blue";
    }

    return <h5 style={h5Style}>Good {timeOfDay} to you, sir or madam</h5>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
