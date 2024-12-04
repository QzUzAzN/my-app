import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "100",
      fruit: "mang0",
      marriage: false,
    };
  }

  handleChange = (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    // chặn sự kiện refresh trang
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <textarea
            name="address"
            id=""
            value={this.state.address}
            onChange={this.handleChange}
          />
          <select
            name="fruit"
            value={this.state.fruit}
            onChange={this.handleChange}
          >
            <option value="grapefruit">grape fruit</option>
            <option value="lime">lime</option>
            <option value="coconut">coconut</option>
            <option value="mang0">mang0</option>
          </select>
          <input
            type="checkbox"
            name="marriage"
            checked={this.state.marriage}
            onChange={this.handleChange}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
