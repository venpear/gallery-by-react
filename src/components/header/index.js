import React from 'react';
import {
  Row,
  Col,
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  CheckBox,
  Modal
} from 'antd';
import styles from './index.scss';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      current: 'top',
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userid: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.callback = this.callback.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  setModalVisible(value) {
    this.setState({modalVisible: value});
  }
  handleClick(e) {
    if (e.key == "register") {
      this.setState({current: 'register'});
      this.setModalVisible(true);
    } else {
      this.setState({current: e.key});

    }
  }
  callback(key) {
    if (key == 1) {
      this.setState({action: 'login'});
    } else if (key == 2) {
      this.setState({action: 'register'});
    }
  }
  logout() {
    localStorage.userid = '';
    localStorage.userNickName = '';
    this.setState({hasLogined: false});
  }
  handleSubmit(e){
    e.preventDefault();
    let formData = this.props.form.getFieldsValue();
    console.log('formData',formData);
  }
  render() {
    let {getFieldDecorator} = this.props.form;
    const userShow = this.state.hasLogined
      ? <Menu.Item key="logout" className={styles.register}>
          <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
          &nbsp;&nbsp;
          <Link target="_blank" to={`/usercenter`}>
            <Button type="dashed" htmlType="button">个人中心</Button>
          </Link>
          &nbsp;&nbsp;
          <Button type="ghost" htmlType="button" onClick={this.logout}>退出</Button>
        </Menu.Item>
      : <Menu.Item key="register" className={styles.register}>
        <i className="iconfont icon-account"/>
        注册/登录
      </Menu.Item>;
    return (
      <Row>
        <Col span={2}></Col>
        <Col span={3}>
          <div className={styles.logo}>
            <img src="./images/yeoman.png" alt=""/>
            <div className={styles.name}>
              <span>ReactNews</span>
            </div>
          </div>
        </Col>
        <Col span={17}>
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="top">
              <i className="iconfont icon-email"></i>
              头条
            </Menu.Item>
            <Menu.Item key="hot">
              <i className="iconfont icon-account"></i>
              热点
            </Menu.Item>
            <Menu.Item key="guonei">
              <i className="iconfont icon-account"></i>
              国内
            </Menu.Item>
            <Menu.Item key="guoji">
              <i className="iconfont icon-account"></i>
              国际
            </Menu.Item>
            <Menu.Item key="keji">
              <i className="iconfont icon-set"></i>
              科技
            </Menu.Item>
            <Menu.Item key="shhui">
              <i className="iconfont icon-email"></i>
              社会
            </Menu.Item>
            <Menu.Item key="yule">
              <i className="iconfont icon-account"></i>
              娱乐
            </Menu.Item>
            {userShow}
          </Menu>
          <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText="关闭">
            <Tabs type="card" onChange={this.callback}>
              <TabPane tab="登录" key="1">
                <Form horizontal onSubmit={this.handleSubmit}>
                  <FormItem label="账户">
                    <Input placeholder="请输入您的账号" {...getFieldDecorator('userName')}/>
                  </FormItem>
                  <FormItem label="密码">
                    <Input type="password" placeholder="请输入您的密码" {...getFieldDecorator('password')}/>
                  </FormItem>
                  <Button type="primary" htmlType="submit">登录</Button>
                </Form>
              </TabPane>
              <TabPane tab="注册" key="2">
                <Form horizontal onSubmit={this.handleSubmit}>
                  <FormItem label="账户">
                    <Input placeholder="请输入您的账号" {...getFieldDecorator('r_userName')}/>
                  </FormItem>
                  <FormItem label="密码">
                    <Input type="password" placeholder="请输入您的密码" {...getFieldDecorator('r_password')}/>
                  </FormItem>
                  <FormItem label="确认密码">
                    <Input type="password" placeholder="请再次输入您的密码" {...getFieldDecorator('r_confirmPassword')}/>
                  </FormItem>
                  <Button type="primary" htmlType="submit">注册</Button>
                </Form>
              </TabPane>
            </Tabs>
          </Modal>
        </Col>
        <Col span={2}></Col>
      </Row>
    );
  }
}

export default Header = Form.create({})(Header);
