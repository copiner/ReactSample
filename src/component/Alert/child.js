import React, { Component } from 'react';

class Child extends Component {
    constructor(props){
        super(props);
        this.state = {
          date: new Date(),
          inputValue: ""
        }
        this.onChange = this.onChange.bind(this);
        this.showValue = this.showValue.bind(this);
        this.pushValue = this.pushValue.bind(this);
  }

  onChange(e) {
    //console.log(e.target.value);
    //设置数据的值，用this.setState({})
    this.setState({
      inputValue: e.target.value
    })
  }

  showValue(){
    //console.log(this.props);
    this.props.showValue && this.props.showValue()
  }

  pushValue(){
    this.props._confirm(this.state.inputValue);
  }

  render() {
    return (
      <div className="Child">
        <div className="content">
           <input value={this.state.inputValue} onChange={this.onChange.bind(this)} />
           <button onClick={this.showValue}>调用父的方法</button>
           <button onClick={this.pushValue}>确认</button>
           <button onClick={this.props._close}>关闭</button>
        </div>
      </div>
    );
  }
}

export default Child;
