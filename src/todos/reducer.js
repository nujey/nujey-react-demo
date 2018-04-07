// reducers指定了应用状态的变化如何响应actions并发送到store的
// 记住 actions只是描述了有事情发生的事实
// 并没有描述应用如何更新state
{
  VisibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: tru
    }, {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
// reducer就是一个纯函数 接收旧的state和action 返回新的state
// (previousState, action) => newState
// 永远不要在reducer做下面三件事情
// 1. 修改传入参数
// 2. 执行有副作用的操作 如API请求和路由跳转
// 3. 调用非纯函数 如Date.now() Math.random()

// 只要传入参数相同，返回计算得到的下一个 state 就一定相同。
// 没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。

// reducer首次执行的时候 state为undefined 这个时候我们可以借机设置并返回应用的初始state
 import { 
  ADD_TODO,
  TOGGLE_TODO, 
  VisibilityFilters,
  SET_VISIBILITY_FILTER
} from './actions'

 const initialState = {
   VisibilityFilter: VisibilityFilter.SHOW_ALL,
   todos: []
 }

//  function todoApp(state, action) {
//    if (typeof state === 'undefined') {
//      return initialState
//    }
//   //  这里暂不处理任何action
//   // 仅返回传入的state
//   return state
//  }
//  当然 这里我们还可以用es6的新语法 参数默认值来简写代码

// function todoApp(state = initialState, action) {
//   // 这里我们开始处理action
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, state, {
//         VisibilityFilter: action.filter
//       })
//     case ADD_TODO:
//       return Object.assign({}, state, {
//         todo: [
//           ...state.todos,
//           {
//             text: action.text,
//             completed: false
//           }
//         ]
//       })
//     case TOGGLE_TODO:
//       return Object.assign({}, state, {
//         todos: state.todos.map((todo, index) => {
//           if (index === action.index) {
//             return object.assign({}, todo, {
//               completed: !todo.completed
//             })
//           }
//           return todo
//         })
//       })
//     default:
//       return state
//   }
// }


const { SHOW_ALL } = VisibilityFilters

function VisibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
// 如果吧todos单独拿出来 那么就会是一个封装
function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

// function todoApp(state = {}, action) {
//   return {
//     VisibilityFilter: VisibilityFilters(state.VisibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }
// 注意每个 reducer 只负责管理全局 state 中它负责的一部分
// 每个 reducer 的 state 参数都不同，分别对应它管理的那部分 state 数据
import { combineReducers } from 'redux'
const todoApp = combineReducers({
  VisibilityFilter,
  todos
})
export default todoApp