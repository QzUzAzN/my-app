import React, { Component } from "react";

const fetchComments = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(["A", "B", "C"]), 1000);
  });

export class CorrectlyState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      comments: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));

    fetchComments().then((res) => {
      this.setState((prevState) => ({
        ...prevState,
        comments: res,
      }));
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>CorrectlyState. Count: {this.state.count}</div>
      </div>
    );
  }
}

export default CorrectlyState;
