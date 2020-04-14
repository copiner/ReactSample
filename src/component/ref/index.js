import React, { Component } from 'react';
import FancyButton from './FancyButton';

// const ref = React.createRef();

class PButton extends React.Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef()
  }

  handleClick = () => {
    console.log(this.buttonRef.current)//父组件拿到子组件的ref
    console.log(Toast);//这里测试Toast弹框组件
    Toast.add('This is a toast', {position: 'right'})
  }

  render() {

    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
        <FancyButton
          label="Click Me"
          kitty="kitty"
          ref={this.buttonRef}
        />
      </div>
    )
  }
}

export default PButton;
