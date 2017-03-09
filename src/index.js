// import 'core-js/fn/object/assign';
import React from 'react';
import {Router, Route, hashHistory, Link} from 'react-router'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//引用公用的样式
// import './styles/index.scss';
import App from './containers/Layout';
import Home from './containers/home';
import Login from './containers/login'

import Fetch from './tool/fetchApi';
window.$$ = Fetch;

// Render the main component into the dom

export default class Root extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="home" component={Home}></Route>
          <Route path="login" component={Login}></Route>
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(
  <Root/>, document.getElementById('app'));
