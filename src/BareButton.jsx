import React from "react";

class BareButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(value) {
    console.log(value);
  }

  //   handleClick = (value) => {
  //     console.log(value);
  //   };

  // currying
  //   handleClick = (value) => () => {
  //     console.log(value);
  //   };

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this, "add")}>Add</button>
        <button onClick={this.handleClick.bind(this, "Edit")}>Edit</button>
        <button onClick={this.handleClick.bind(this, "delete")}>Delete</button>
      </div>
    );
  }
}

export default BareButton;
