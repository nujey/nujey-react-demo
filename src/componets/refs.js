import React from 'react'

class Refs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '我是一个state标题',
      name: '',
      age: 0,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = () => {
    console.log('Input value:' , this.input.value)
    this.setState({
      title: '我是换过的标题',
      age: this.input.value
    })
  }
  render() {
    const name = this.props.name
    // const age = this.input.value
    return (
      <div>
        <p>{this.state.title}-{name}-{this.state.age}</p>
        <form>
          <input type="text" ref={(input) => this.input = input} onChange={this.handleChange}/>
        </form>
        {/*<form onSubmit={() => handleChange(inputElement.value)}>
          <input
            type="text"
            ref={(input) => inputElement = input} />
          <button type="submit">Submit</button>
        </form>*/}
      </div>
    )
  }
}

class InputRefs extends React.Component {
  constructor(props) {
    super(props)
    this.focus = this.focus.bind(this)
  }
  focus = () => {
    // 通过使用原生API，显式地聚焦text输入框
    this.inputText.focus()
  }
  render() {
    return(
      <form>
        <input type="text" ref={(input) => this.inputText = input}/>
        <input type="button" onClick={this.focus}/>
      </form>
    )
  }
}

export default Refs

