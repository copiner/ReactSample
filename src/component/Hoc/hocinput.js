import React, { Component } from 'react';
import LInput from './input'

const HocInput = WrappedComponent => {
  return class extends Component {

    handleClick = () =>{
      console.log('click');
    }

    render() {
      return (
          <WrappedComponent
            {...this.props}
            onFocus={this.handleClick}
          />
      )
    }
  }
}

export default HocInput(LInput);
