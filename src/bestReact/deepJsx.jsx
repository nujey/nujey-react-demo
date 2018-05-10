// react必须在作用域中
import React from 'react'

{/* <MyButton color="blue" shadowSize={2}>
  click me
</MyButton>

React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'clice me'
) */}
// 对jsx使用点语法
// 如果有一个单一模块 但却导出多个react组件的时候 这会很方便 比如：
const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>imgine a {props.color} DatePicker</div>
  }
}
function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />
}

// 用户定义的组件必须是大写字母开头
// 如果是小写字母开头的组件 react会认为是一个标签 而不是一个组件 所以需要重命名
function hello(props) {
  return <div>{props.toWhat}</div>
}
function HelloWorld() {
  return <Hello toWhat="world" />
}

// 在根据不同的props 渲染不同的组件的时候
不能使用一个普通的表达式作为react元素类型
如果想使用表达式来表示元素类型的时候需要赋值给大写的变量 比如：
import { PhotoStory, VideoStory } from './stories'
const components = {
  photo: PhotoStory,
  video: VideoStory
}
function Story(props) {
  // return <components[props.storyType] story={props.storyType} />
  const SpecificStory = components[props.storyType]
  return <SpecificStory story={props.storyType} />
}

jsx中的props属性
  // 1. 可以传递一个用{}包裹的js表达式
  <MyComponents foo={ 1 + 2 + 3 + 4 } />


  // 2. if和for循环代码块 不是表达式 不能再jsx中直接使用 但是可以放在附近的代码块中
  function NumberDescript(props) {
    let description;
    if (props.number % 2 == 0) {
      description = <span>even</span>
    } else {
      description = <span>odd</span>
    }
    return <div>{props.number} is an {description} number</div>
  }


  // 3. props不传值的时候 默认为true
  <MyComponents autoCom />
  <MyComponents autoCom={true} />

  // 4.props可以进行属性扩展
  function app1() {
    return <MyComponents firstName = 'a' secondName = 'b' />
  }
  function app2() {
    const props = {
      firstName: 'a',
      secondName: 'b'
    }
    return <MyComponents {...props}/>
  }