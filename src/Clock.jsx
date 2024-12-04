import React from "react";

const lists = ["xatria", "yaz", "xibo"];

const fetchApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lists);
    }, 1000);
  });
};

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        created: new Date().toLocaleTimeString(),
      },
      seconds: {
        created: new Date().getSeconds(),
      },
      name: this.props.name,
      lists: [],
      darkMode: false,
    };
  }

  getTime = () => {
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString(),
      },
    };

    this.setState(newState);
  };

  componentDidMount() {
    const seconds = document.getElementById("h2");
    console.log(seconds);

    fetchApi().then((res) =>
      this.setState((prevState) => ({
        ...prevState,
        lists: res,
      }))
    );
  }

  componentDidUpdate() {
    if (this.state.darkMode) {
      const value = document.querySelector("input").value;
      console.log("Value là: ", value);
    }
  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      ...prevState,
      darkMode: !prevState.darkMode,
    }));
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Hello, world, {this.state.name}</h1>
        <h2 id="h2">It is {this.state.time.created}</h2>
        <h2>It is {this.state.seconds.created}</h2>
        <button onClick={this.getTime}>Click</button>
        <button onClick={this.toggleDarkMode}>Toggle</button>
        {this.state.darkMode && (
          <input value={this.state.darkMode} type="text" />
        )}
      </div>
    );
  }
}
