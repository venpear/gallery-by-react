// import 'core-js/fn/object/assign';
import React from 'react';
import { Router, Route, hashHistory, Link } from 'react-router'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './components/Main';
import Home from './containers/home';
import Login from './containers/login'

// Render the main component into the dom

export default class Root extends React.Component{
  render(){
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}></Route>
        <Route path="home" component={Home}></Route>
        <Route path="login" component={Login}></Route>
      </Router>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('app'));
