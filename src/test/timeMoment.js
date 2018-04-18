/**
 * 该组件是对封装的时间处理的引用和demo
 */
import React from 'react'
// 引入自定义时间插件
import TimeDay from '../utils/day'

export default class TimeMoment extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange() {
    const dayArray = new TimeDay()
    console.log(dayArray.laterYear(10))
  }
  render() {
    return(
      <div>
        <button onClick={this.handleChange}>点击生成格式数据</button>
      </div>
    )
  }
}
