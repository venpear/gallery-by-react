import React from 'react';
import {  Row, Col,  Menu, Icon,  Tabs,  Modal, Button, Link} from 'antd';
import {Signin, Signout} from '../form';
import styles from './index.scss';
const TabPane = Tabs.TabPane;
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
  }
  setModalVisible(value) {
    this.setState({modalVisible: value});
  }
  showUsername(name){
    this.setState({hasLogined:true,userNickName:name})
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
  render() {
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
            {
              this.state.hasLogined &&
              <Menu.Item key="logout" className={styles.register}>
                  <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                  &nbsp;&nbsp;
                  <Button type="dashed" htmlType="button">个人中心</Button>
                  {/* <Link target="_blank">
                  </Link> */}
                  &nbsp;&nbsp;
                  <Button type="ghost" htmlType="button" onClick={this.logout}>退出</Button>
                </Menu.Item>
            }
            {
              !this.state.hasLogined &&
              <Menu.Item key="register" className={styles.register}>
                <i className="iconfont icon-account"/>
                注册/登录
              </Menu.Item>
            }
          </Menu>
          <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText="关闭">
            <Tabs type="card" onChange={this.callback}>
              <TabPane tab="登录" key="1">
                <Signin close={()=>this.setModalVisible(false)} showUsername={ name => this.showUsername(name)}></Signin>
              </TabPane>
              <TabPane tab="注册" key="2">
                 <Signout close={()=>this.setModalVisible(false)}></Signout>
              </TabPane>
            </Tabs>
          </Modal>
        </Col>
        <Col span={2}></Col>
      </Row>
    );
  }
}

export default Header;
