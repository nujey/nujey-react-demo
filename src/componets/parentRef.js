// 对父组件暴露 DOM 节点
import React from 'react'

function CustomTextInput(props) {
  return (
    <div>
      <p onClick={props.parentClick}>点击我啊</p>
      <input ref={props.inputRef}/>
    </div>
  )
}
function Parent(props) {
  return (
    <div>
      My input: <CustomTextInput inputRef={props.inputRef} parentClick={props.handleGrandClick}/>
    </div>
  )
}
class GrandParent extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = (e) => {
    console.log(this.inputElement, e.target.offsetWidth, e.target.offsetWidth, e.target.offsetTop)
  }
  render() {
    return (
      <Parent inputRef={el => this.inputElement = el} handleGrandClick={this.handleClick}/>
    )
  }
}

export default GrandParent