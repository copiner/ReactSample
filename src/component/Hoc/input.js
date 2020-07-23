import React, { Component } from 'react';
import { DatePicker } from 'antd';
class LInput extends React.Component {
  constructor(props) {
    super(props);
  }

  handleInput = (e) => {
    console.log(e.target.value)
  }

  onChange = (date, dateString) => {
    console.log(date, dateString);
  }

  render() {

    return (
      <>
        <DatePicker onChange={this.onChange} />
        <input onChange={this.handleInput} />
      </>
    )
  }
}

export default LInput;
