// 受控组件使 React 的 state 成为 “单一数据源原则” 来结合这两个形式
// 然后渲染表单的 React 组件也可以控制在用户输入之后的行为
// 这种形式，其值由 React 控制的输入表单元素称为“受控组件”。
import React from 'react'

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class controlledForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }
  updateusername = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  handleSubmit = () => {

  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.username}
          onChange={this.updateusername}
          />
          <button type="submit">Submit</button>
      </form>
    )
  }
}
