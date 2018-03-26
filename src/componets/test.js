import React, { Component } from 'react'

class TestShow extends Component {
  constructor(props) {
    super(props)
    this.handleTest = this.handleTest.bind(this)
    this.state = {
      name: props.name,
      age: props.age || 0,
      isLoggerIn: props.isLoggerIn,
      isStatus: false
    }
  }
  handleTest() {
    this.setState({
      isStatus: !this.state.isStatus,
    })
  }
  render() {
    // 这里使用props证明是从外部传进来的值
    const outStatus = this.props.isLoggerIn;
    // 这里使用state证明是从组件内部的值
    const inStatus = this.state.isStatus;
    return (
      <div>
        <p>{inStatus ? this.props.name : this.props.age }</p>
        <button onClick={this.handleTest}>button</button><br/>
        <span>{outStatus ? "退出登陆ing" : "登陆ing"}</span>
      </div>
    );
  }
}

export default TestShow;
