import React from 'react';
import {Form, Input, Button, CheckBox, message} from 'antd';
const FormItem = Form.Item;

class Signin extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('getFieldsValue',this.props.form.getFieldValue('username'))
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        $$.postForm('/api/users/sigin',values).then(res => {
          if(res.code == 0){
              message.info('登陆成功！');
              this.props.close();//关闭弹窗
              this.props.showUsername(res.msg[0].username);//显示用户
          }
        })
      }
    });
  }
  render() {
    let {getFieldDecorator} = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label="账户">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your name!'
              }
            ]
          })(<Input placeholder="请输入用户名"/>)}
        </FormItem>
        <FormItem label="密码">
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!'
              }
            ]
          })(<Input type="password" placeholder="请输入您的密码"/>)}
        </FormItem>
        <Button type="primary" htmlType="submit">登录</Button>
      </Form>
    )
  }
}

export default Signin = Form.create({})(Signin);
