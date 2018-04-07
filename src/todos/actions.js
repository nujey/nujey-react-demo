// action是把数据从应用传到store的有效载荷
// 他是store的数据的唯一来源
// 一般而言我们是通过store.dispatch()将action传到store

/**
 * 这里是action类型
*/
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
/**
 * 其他的常量
*/
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
/**
 * action创建函数
*/
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index
  }
}
export function setvisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

// import {ADD_TODO, REMOVE_TODO } from './actionsTypes'
// action内必须使用一个字符串类型的type字段来表示将要执行的动作
// 我们还需要添加一个action index来表示用户完成任务的动作序列号
// 因为数据是存放在数组中的 所以我们可以用下标index来引用特定的任务
// {
//   type: TOGGLE_TODO,
//   index: 5
// }
// 最后再添加一个action type来表示当前的任务展示选项
// {
//   type: SET_VISIBILITY_FILTER,
//   filter: SHOW_COMPLETED
// }
// action创建函数就是生成action方法
// 在redux中 action创建函数只是简单的返回一个action
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
// 在redux中 只需要把创建函数的结果传递给dispatch() 方法即可以发起一次dispatch过程
dispatch(addTodo(text))
dispatch(completeTodo(index))
// 当然我们也可以创建一个被绑定的action创建函数来自动dispatch
const boundAddTodo = text => dispatch(addTodo(text))
const boundCompleteTodo = index => dispatch(completeTodo(index))
// 然后可以调用它们
 boundAddTodo(text)
 boundCompleteTodo(index)



 /**
  * Flux中的action 一般每一个action创建函数都会触发一次dispatch
 */
// 在传统的flux中 当调用action创建函数的时候 一般会触发一个dispatch
function addTodoWithDispatch(text) {
  const action = {
    type: ADD_TODO,
    text
  }
  dispatch(action)
}
