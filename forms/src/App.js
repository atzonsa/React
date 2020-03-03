import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      isFriendly: null,
      gender: "",
      favoriteColor: "blue"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  handleSubmit() {}

  render() {
    return (
      <form>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
        <br />
        <textarea
          value={this.state.Address}
          name="address"
          placeholder="Address"
          onChange={this.handleChange}
        />
        <br />
        <h1>{this.state.address}</h1>
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          Is friendly
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          Female
        </label>
        <br />
        <select
          value={this.state.favoriteColor}
          name="favoriteColor"
          onChange={this.handleChange}
        >
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
        </select>
        <br />
        <button onChange={this.handleSubmit}>Submit</button>
        <h1>this man is {this.state.isFriendly ? "Friendly" : "Unfriendly"}</h1>
        <h1>{this.state.gender}</h1>
        <h1>{this.state.favoriteColor}</h1>
      </form>
    );
  }
}
