import React, { Component } from 'react';

import {
  Form, Icon, Input, Button,DatePicker
} from 'antd';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;
//ant desigin form ...
class AppForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:'',
          password:''
        };
        this.handleSubmit = (e) => {
           e.preventDefault();
           this.props.form.validateFields((err, fieldsValue) => {

             if (err) {
               return
             }
             // Should format date value before submit.
            const values = {
              ...fieldsValue,
              'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD')
            };
            console.log('Received values of form: ', values);

           });
       };
       this.hasErrors = (fieldsError) =>  {
         Object.keys(fieldsError).some(field => fieldsError[field]);
       }
    }

    componentDidMount() {
      // To disabled submit button at the beginning.
      this.props.form.validateFields();
    }

    render() {
        const {
          getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
        } = this.props.form;

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

        const config = {
          rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };

        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        return (
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label="DatePicker"
            >
              {getFieldDecorator('date-picker', config)(
                <DatePicker />
              )}
            </FormItem>
            <FormItem
              validateStatus={userNameError ? 'error' : ''}
              help={userNameError || ''}
            >
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                disabled={this.hasErrors(getFieldsError())}
              >
                Log in
              </Button>
            </FormItem>
          </Form>

        );
    }
}
export default Form.create()(AppForm);
