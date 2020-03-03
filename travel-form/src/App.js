import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
      destination: "",
      italian: false,
      chinese: false,
      thai: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <main>
        <form>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={this.state.gender === "Male"}
              onChange={this.handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={this.state.gender === "Female"}
              onChange={this.handleChange}
            />
            Female
          </label>
          <br />
          <br />
          <select
            name="destination"
            value={this.state.destination}
            onChange={this.handleChange}
          >
            <option value="">-- Select Destination --</option>
            <option value="Germany">Germany</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
            <option value="Tokyo">Tokyo</option>
          </select>
          <br />
          <br />
          <label>
            <input
              type="checkbox"
              name="italian"
              checked={this.state.italian}
              onChange={this.handleChange}
            />
            Italian
          </label>
          <label>
            <input
              type="checkbox"
              name="chinese"
              checked={this.state.chinese}
              onChange={this.handleChange}
            />{" "}
            Chinese
          </label>
          <label>
            <input
              type="checkbox"
              name="thai"
              checked={this.state.thai}
              onChange={this.handleChange}
            />{" "}
            Thai
          </label>
        </form>
        <br />
        <br />
        <hr />
        <h1>Form Details</h1>
        <p>First Name: {this.state.firstName}</p>
        <p>Last Name: {this.state.lastName}</p>
        <p>Age: {this.state.age}</p>
        <p>Gender: {this.state.gender}</p>
        <p>Destination: {this.state.destination}</p>
        <p>
          Food: {this.state.italian && "Italian, "}{" "}
          {this.state.chinese && "Chinese, "} {this.state.thai && "Thai"}
        </p>
      </main>
    );
  }
}
