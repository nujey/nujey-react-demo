import React from 'react'

export class SubstringUrl extends React.Component {
  constructor(props) {
    super(props)
    this.handleUrl = this.handleUrl.bind(this)
    this.state = {
      url: 'www.zhangfeng.com?id=1&name=zhangfeng&age=18'
    }
  }
  handleUrl() {
    // 获取一个一个url后面的参数
    const str = this.state.url.substring(this.state.url.indexOf('?') + 1)
    const arr = str.split('&')
    let newArr = []
    let params = {}
    arr.forEach((e, index) => {
      newArr = e.split('=')
      params[newArr[0]] = newArr[1]
    })
    this.setState({
      str: str,
      params: [params]
    })
  }
  render() {
    const listItem = this.state.params
    let listItems = []
    if (listItem) {
      listItems = listItem.map((item) =>
        <span>{item.name}2222</span>
      )
    }
    return (
      <div>
        {listItem ? listItem[0].name : 0}
        <button onClick={this.handleUrl}>惦记我哦对url进行处理哦</button>
      </div>
    )
  }
}
