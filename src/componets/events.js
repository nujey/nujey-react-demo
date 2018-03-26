import React from 'react'

class EventDefault extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      isLogin: true,
    }
  }
  handleClick() {
    this.setState(preState => {
      isLogin: !preState.isLogin
    })
  }
  render() {
    return(
      <div onClick={this.handleClick}>
        {this.state.isLogin ? 'on' : 'off'}
      </div>
    )
  }
}