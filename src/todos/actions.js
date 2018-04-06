// action是把数据从应用传到store的有效载荷
// 他是store的数据的唯一来源
// 一般而言我们是通过store.dispatch()将action传到store
export const ADD_TODO = 'ADD_TODO'
{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
import {ADD_TODO, REMOVE_TODO } from './actionsTypes'
// action内必须使用一个字符串类型的type字段来表示将要执行的动作