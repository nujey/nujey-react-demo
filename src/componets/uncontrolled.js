// 不受控组件 其实就是您的表单数据由 DOM 处理
// 而不是您的 React 组件
/**
 * 一般都是通缩refs来实现
 */ 
import react from 'react'

class Uncontrolled extends React.Component {
  hanldeSubmit = () => {
    console.log('Input Value:', this.input.value)
    event.preventDefault()
  }
  render() {
    const status = this.props.status
    return (
      <div>
        <form onSubmit={this.hanldeSubmit}>
          {/*当然 如果我们希望我们的表单值有一个初始值 那么我们就使用defaultValue/defaultChecked*/}
          <input type="text" ref={(input) => this.input = input}/>
        </form>
      </div>
    )
  }
}