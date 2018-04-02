import { createStore } from 'redux'

/** 这是一个reducer 形式为(state, action) => state的纯函数
 * 描述了action如何把state转变成下一个state
 * 
 * state的形式取决于你自己 可以是基本类型 数组 对象
 * 甚至是immutable.js生成的数据结构 唯一的要点是
 * 当state变化时候 需要返回全新的对象 而不是修改传入的参数
 * 
 * 下面例子使用switch语句和字符串来判断 但是你可以写帮助类
 * 根据不同的约定（比如一个方法的映射）来判断 只要适合你的项目就可以
 */
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
// 创建Redux store来存放应用的状态
// API 是{ subscribe, dispatch, getState }
let store = createStore(counter);
// 可以手动订阅更新 也可以事件绑定到视图层
store.subscribe(() => {
  console.log(store.getState())
})

// 改变内部吧state 唯一的方法就是dispatch action
// action可以被序列化 用日记记录和存储下来 后来还可以以回放的方式执行

// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'DECREMENT' })

// 你应该把要做的修改变成一个普通对象，这个对象被叫做 action，而不是直接修改 state
// 然后编写专门的函数来决定每个 action 如何改变应用的 state，这个函数被叫做 reducer
// 这里需要注意的是 以前的flux是支持多个store的 但是redux只允许有一个数据池

// 比如我们使用普通对象来描述应用的状态state的时候 例如todo应用的state可能是下面这样
{
  todos: [{
    text: 'eat food',
    completed: true
  }, {
    text: 'exercise',
    completed: false
  }],
  visibilityFilter: 'SHOW_COMPLETED'
}
// 要想更新 state 中的数据，你需要发起一个 action
// Action 就是一个普通 JavaScript 对象 用来描述发生了什么
{ type: 'ADD_TODO', text: 'Go to Swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }