import React, { Component } from 'react';
import logProps from './logprops'
/*
在V16版本之前，我们想要父组件拿到子组件的ref，需要通过一些特殊的方法，
V16版本之后，React提供了一种原生的方式来完成这种操作。
这就涉及到React新增的另一个API： React.forwardRef()， 通过接受一个函数，来传递refs
*/

class SButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>{this.props.label}</div>
    )
  }
}

// Rather than exporting FancyButton, we export LogProps.
// It will render a FancyButton though.
export default logProps(SButton);
