import React, { Component } from 'react';

import { Input, DatePicker, Button, Select } from 'antd';
const { RangePicker } = DatePicker;
const { Option } = Select;

class AppForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current: '1',
          username:"李笑笑"
        };
    }

    render() {
        return (
            <div className="form-menu">
              <div className="form-criteria">
                 <span><RangePicker /></span>
                 <span><Input style={{ width: 160 }} placeholder="Basic usage" /></span>
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
                <span><Button type="primary">提交</Button></span>
              </div>
            </div>
        );
    }
}

export default AppForm
