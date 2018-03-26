import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.tick = this.tick.bind(this)
    this.state = {
      date: new Date()
    }
  }
  // 在生命周期钩子中设置定时器
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div>
        <h1>hello! Clock</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
export default Clock
