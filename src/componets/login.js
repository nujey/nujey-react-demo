import React, { Component } from 'react'

import TestShow from './test'

class LoginControl extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      isLoginStatus: false,
    }
  }
  handleLogin() {
    this.setState({
      isLoginStatus: true,
    })
  }
  handleLogout() {
    this.setState({
      isLoginStatus: false,
    })
  }

  render() {
    const isLogin = this.state.isLoginStatus;
    let button = null;
    if (isLogin) {
      button = <button onClick = {this.handleLogout}>Login</button>;
    } else {
      button = <button onClick = {this.handleLogin}>LogOut</button>;
    }
    return (
      <div>
        <TestShow name="nujey" age={18} isLoggerIn={isLogin}/>
        {button}
      </div>
    )
  }
}

export default LoginControl;