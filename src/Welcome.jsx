// Functional component
function Welcome(props) {
  return (
    <h1>
      Hello, {props.name} - {props.age}
    </h1>
  );
}

// import React from "react";

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
export default Welcome;
