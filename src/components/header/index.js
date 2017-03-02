import React from 'react';
import {
  Row,
  Col,
  Menu,
  Icon,
  Button
} from 'antd';
import styles from './index.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class About extends React.Component {
  state = {
    current: 'mail'
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({current: e.key});
  }
  render() {
    return (
      <Row>
        <Col span={2}></Col>
        <Col span={6}>
          <div className="logo">
            <img src="./images/yeoman.png" alt=""/>
          </div>
        </Col>
        <Col span={14}>
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="mail">
              <i className="iconfont icon-email"></i>前端
            </Menu.Item>
            <Menu.Item key="app">
            <i className="iconfont icon-account"></i> 后端
            </Menu.Item>
            <Menu.Item key="alipay">
              <i className="iconfont icon-set"></i>博客
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={2}></Col>
      </Row>
    );
  }
}
