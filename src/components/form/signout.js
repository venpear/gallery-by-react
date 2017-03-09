import React from 'react';
import {Form, Input, Button, CheckBox} from 'antd';
const FormItem = Form.Item;

class Signout extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        $$.postForm('/api/users',values).then(res => {
          if(res.code == 0){
            message.info('注册成功！');
            this.props.close();
          }
        })
      }
    });
  }
  render (){
    let {getFieldDecorator} = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label="账户">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your username'
              }
            ]
          })(<Input placeholder="请输入您的账号"/>)}
        </FormItem>
        <FormItem label="密码">
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password'
              }
            ]
          })(<Input type="password" placeholder="请输入您的密码"/>)}
        </FormItem>
        <FormItem label="确认密码">
          {getFieldDecorator('r_confirmPassword', {
            rules: [
              {
                required: true,
                message: 'Please input your password'
              }
            ]
          })(<Input type="password" placeholder="请再次输入您的密码"/>)}
        </FormItem>
        <Button type="primary" htmlType="submit">注册</Button>
      </Form>
    )
  }
}

Signout.defaultProps = {
  close:() => {this.handleClose}
}

export default Signout = Form.create({})(Signout);
