import React from "react";
import PropTypes from "prop-types";

class BareInput extends React.Component {
  render() {
    const { type: typeInput, ...rest } = this.props;
    return <input {...rest} autoFocus={false} type={typeInput} />;
  }
}

// function BareInput({ type, ...rest }) {
//   return <input {...rest} autoFocus={false} />;
// }

BareInput.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
};

export default BareInput;
