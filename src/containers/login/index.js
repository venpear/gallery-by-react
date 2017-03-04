import React from 'react';
import LoginCom from '../../components/login';
import styles from './index.scss';

export default class Login extends React.Component{
  render (){
    return (
      <div className={styles.login}>
        <LoginCom></LoginCom>
      </div>
    )
  }
}
