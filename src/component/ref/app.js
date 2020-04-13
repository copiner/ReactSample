import React, { Component } from 'react'

const CustomTextInput = React.forwardRef((props, ref) => (
  <div>
      <input ref={ref} />
   </div>
));

class ForRef extends React.Component {
  constructor(props) {
    super(props);
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.inputElement = React.createRef();
    this.focusTextInput = () => {
      // 使用原生 DOM API 使 text 输入框获得焦点
      console.log(this.inputElement)
      this.inputElement.current.focus();
    };
  }

  render() {
    return (
      <div>
      <CustomTextInput
        ref={this.inputElement}
      />
      <input
          type="button"
          value="FOCUS"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

export default ForRef;
