import React, { Component } from 'react'

class OneTest extends Component {
  constructor(props) {
    super(props)
    // 需要绑定 this到后面的方法
    this.onShow = this.onShow.bind(this)
    this.state = {
      name: '',
      isShow: false
    }
  }
  onShow() {
    this.setState({
      isShow: !this.state.isShow,
    })
  }
  render() {
    const isStatus = this.state.isShow
    return (
      <div>
        <button onClick={this.onShow}>主人～要不你点我一下试试看～</button>
        {
          isStatus ? (<h1>hello! Here is {this.props.name}</h1>) : ''
        }
      </div>
    )
  }
}

export default OneTest
