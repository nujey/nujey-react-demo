import React from 'react'


class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
  }
  focus = () => {
    console.log(this.textInput)
    this.textInput.focus()
  }
  render() {
    return (
      <div>
        <input type="text" ref={(input) => { this.textInput = input; }} />
        <button onClick={this.focus}>focus</button>
      </div>
    )
  }
}
class AutofocusClass extends React.Component {
  componentDidMount() {
    this.textInput.focus()
  }
  render() {
    return (
      <CustomTextInput ref={input => this.textInput = input}/>
    )
  }
}
// 函数式组件不能直接使用ref 因为没有this实例，所以需要提前定义
function AutofocusFunction (props) {
  let textInput = null
  function handleClick() {
    textInput.focus()
  }
  return (
    <div>
      <input type="text" ref={input => textInput = input}/>
      <button onClick={handleClick}>focus</button>
    </div>
  )
}
// 对副组件暴露DOM节点
function childInput(props) {
  return (
    <div>
      <input type="text" ref={props.inputRef}/>
    </div>
  )
}
class Autofocus extends React.Component {
  handleClick = function() {}
  render() {
    return (
      <div>
        <childInput inputRef={el => this.inputElement = el}/>
      </div>
    )
  }
}
export default Autofocus
