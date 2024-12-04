import React, { Component, createRef } from "react";

export class UncontrolledComponent extends Component {
  constructor(props) {
    super(props);
    this.input = createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.input);
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name:
            <input type="text" ref={this.input} />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default UncontrolledComponent;
