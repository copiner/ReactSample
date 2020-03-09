import React, { Component } from 'react';
import {Form, Icon, Input, Button, DatePicker } from 'antd';
const FormItem = Form.Item;
const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const dateConfig = {
  rules: [
    {
      type: 'object',
      required: true,
      message: 'Please select time!',
    },
  ],
};

const userConfig = {
  rules: [
    {
      type: 'array',
      required: true,
      message: 'Please input your username!',
    },
  ],
};

const passwordConfig = {
  rules: [
    {
      type: 'array',
      required: true,
      message: 'Please input your password!',
    },
  ],
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


class CForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:'',
          password:''
        };

    }

    onFinish = values => {
      console.log('Success:', values);
    };

    onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    render() {

        return (
          <Form layout="inline" {...formItemLayout}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          >
            <Form.Item name="date-picker" label="DatePicker" {...dateConfig}>
              <DatePicker />
            </Form.Item>

            <Form.Item label="Username" name="username" {...userConfig}>
               <Input />
            </Form.Item>

            <Form.Item label="Password" name="password" {...passwordConfig}>
               <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>

        );
    }
}
export default Form.create()(CForm);
