import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 使用ES6语法来创建一个组件类
// 父类是Component
class ClickCounter extends Component {
  // 构造函数
  // 组件读取传入的props的值的时候 可以通过两种方式
  // 一种是在构造函数constructor 里面传入参数props
  // 另外一种是在render函数里面解构赋值
  constructor(props) {
    // super函数到底是个啥呢
    super(props);
    // 方法绑定 为了预防 方法在提取出来单独使用的时候
    // this的指向已经发生了变化 this指向了该方法运行时的运行环境
    // 所以可以在构造方法中绑定this 那么为啥不使用箭头函数呢
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    
    // 通常我们在constructor构造函数的结尾处对this.state进行初始化
    // 组件的state必须是一个javascript对象 不能是string或者是number这样的简单数据的类型

    this.state = {
      num: props.num || 0,
    }
  }
  // 方法的定义 一次对props的数据操作
  onClickIncrementButton() {
    // 这里必须使用this.setState函数来改变state的值
    // 如果直接对this.state.num进行运算的话 那么是不会驱动组件进行重新渲染的
    // this.setState({ num: this.state.num + 1 });

    this.updateCount(true)
  }
  // 减法
  onClickDecrementButton() {
    // this.setState({ num: this.state.num - 1 });

    this.updateCount(false)
  }
  // 如果是实现子组件向父组件传值呢
  /**
   * 用来对加减法做一个封装
   * @param {any} isIncrement 
   * @memberof ClickCounter
   */
  updateCount(isIncrement) {
    const prevValue = this.state.num;
    const newValue = isIncrement ? prevValue + 1 : prevValue - 1;
    this.setState({ num: newValue })
    this.props.onUpdate(newValue, prevValue)
  }
  // 生命周期函数------shouldConponentUpdate(nextProps, nextState)
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
           (nextState.num !== this.state.num);
  }
  // componentWillUpdate() {
  // }

  // 在react组件内部只用onclick的时候 并没有和HTML使用一样 而是使用了事件委托的方式
  // 所以 通过事件委托的方式添加事件 无论出现多少个onCLick 其实最后都只在DOM树上面添加了一个事件处理函数
  // 决不允许render函数中进行setState 因为render函数是一个纯函数 完全是根据this.state 和this.props来决定返回的结果
  render() {
    // caption是可以直接在render里面通过this.props访问到的
    // 这里可以有两种写法
    const { caption } = this.props  // 解构赋值
    // const caption  = this.props.caption; // 对象引用
    // 除了在组件中定义交互行为 还可以在React组件中定义样式
    const counterStyle = {
      margin: '16px'
    }
    return (
      <div style = { counterStyle }>
        <button onClick = { this.onClickIncrementButton }>Click Me 加1</button>
        <span>click Count: { this.state.num }</span>
        <button onClick = { this.onClickDecrementButton }>Click Me 减1</button>
        <p>{ caption }</p>
      </div>
    );
  }
  // componentDidUpdate() {
  // }
}
// 我们可以对props的值的类型进行定义 isrequired表示 是不是必须的props
ClickCounter.propTypes = {
  caption: PropTypes.number,
  num: PropTypes.number,
  onUpdate: PropTypes.func
};


export default ClickCounter;
