
import React, { Component } from 'react';
import FancyButton from './FancyButton';

// const ref = React.createRef();

// The FancyButton component we imported is the LogProps HOC.
// Even though the rendered output will be the same,
// Our ref will point to LogProps instead of the inner FancyButton component!
// This means we can't call e.g. ref.current.focus()

class PButton extends React.Component {
  constructor(props) {
    super(props);

    this.buttonRef = React.createRef()
  }

  handleClick = () => {
    console.log(this.buttonRef.current)
  }

  render() {

    return (
      <FancyButton
        label="Click Me"
        handleClick={this.handleClick}
        kitty="kitty"
        ref={this.buttonRef}
      />
    )
  }
}

// Rather than exporting FancyButton, we export LogProps.
// It will render a FancyButton though.
export default PButton;
