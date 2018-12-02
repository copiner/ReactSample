import React, { Component } from 'react';

import { Input, DatePicker, Button, Select } from 'antd';
const { RangePicker } = DatePicker;
const { Option } = Select;

class Acc extends Component {
    constructor(props) {
        super(props);
        this.state = {
          color: '',
          name:'',
          password:''
        };
        this.changeColor = (e) => {
          console.log(e.target.value);
        }

        this.choseColor = (e) => {
          this.setState({color:e.target.value});
        }
        this.nameInput = (e) => {
          this.setState({name:e.target.value});
        }
        this.passwordInput = (e) => {
          this.setState({password:e.target.value});
        }
        this.doSubmit = () => {
          //提交时，把表单参数放入temp state
          console.log(this.input.value)

        }
    }

    // changeColor = (e) => {
    //   console.log(e.target.value);
    // }
    //
    // choseColor = (e) => {
    //   this.setState({color:e.target.value});
    // }

    // changeColor(e){
    //     console.log(e.target.value);
    // }


    render() {
        return (
            <div className="form-menu">
              <div className="form-criteria">
                 <span><RangePicker /></span>
                 <div>
                 <span><input ref={(input) => this.input = input} /></span>
                 <span><Input style={{ width: 180 }} name="name" type="text" placeholder="name" value={this.state.name} onChange={this.nameInput} /></span>
                 <span><Input style={{ width: 180 }} type="password" name="password" placeholder="password" value={this.state.password} onChange={this.passwordInput} /></span>
                 </div>
                 <span><Select
                 defaultValue="lucy"
                 style={{ width: 160 }}
                 placeholder="Select a person">
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select></span>
                <span><Select
                defaultValue="lucy"
                style={{ width: 160 }}
                placeholder="Select a person">
                 <Option value="jack">Jack</Option>
                 <Option value="lucy">Lucy</Option>
                 <Option value="Yiminghe">yiminghe</Option>
               </Select></span>
              </div>
              <div onChange={this.changeColor}>
                 <h2>选择你喜欢的颜色</h2>
                  <input type="radio" id="color1" name="color" value="red" />
                  <label htmlFor="color1" >red</label>

                  <input type="radio" id="color2" name="color" value="yellow"/>
                  <label htmlFor="color2">yellow</label>

                  <input type="radio" id="color3" name="color" value="green"/>
                  <label htmlFor="color3">green</label>
              </div>
              <div>
                <input type="checkbox" id="color1" name="color" value="red" onChange={this.choseColor} />
                <label htmlFor="color1" >red</label>

                <input type="checkbox" id="color2" name="color" value="yellow" onChange={this.choseColor} />
                <label htmlFor="color2">yellow</label>

                <input type="checkbox" id="color3" name="color" value="green" onChange={this.choseColor}  />
                <label htmlFor="color3">green</label>
              </div>
              <span><Button type="primary" onClick={this.doSubmit}>提交</Button></span>
            </div>
        );
    }
}

export default Acc
