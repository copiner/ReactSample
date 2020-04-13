import React, { Component } from 'react';

class LInput extends React.Component {
  constructor(props) {
    super(props);
  }

  handleInput = (e) => {
    console.log(e.target.value)
  }

  render() {

    return (
      <input onChange={this.handleInput} />
    )
  }
}

export default LInput;
