import React from "react";
import ReactDOM from "react-dom";

function App() {
  const fname = "Ankit";
  const lname = "Zonsa";

  const date = new Date();
  //const date = new Date(2020, 3, 1, 13);
  let hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours > 12 && hours <= 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  const h4Style = {
    color: "purple",
    backgroundColor: "#ff2000",
    fontSize: "50px"
  };

  const h5Style = {
    fontSize: 30
  };

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

  return (
    <div>
      <h1>Hello {fname + " " + lname}</h1>
      <h2>Hello {`${fname} ${lname}`}</h2>
      <h3>It is currently about {date.getHours() % 12} o'clock</h3>
      <h3 style={{ color: "purple", backgroundColor: "#ff2000" }}>
        Good {timeOfDay}
      </h3>
      <h4 style={h4Style}>Good {timeOfDay}</h4>
      <h5 style={h5Style}>Good {timeOfDay}</h5>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
