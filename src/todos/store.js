// action 我们用来描述发生了什么
// reducer 其实是根据action的描述来更新state
// store就是把它们联系到一起的对象
//  1. 维持应用的state
//  2.提供getState()方法或许state
//  3.通过subscribe（lisrener）注册监听器
//  4. 通过subscribe(listener)返回的函数注销监听器

//  redux应用只有一个单一的store 所以当需要拆分数据逻辑的时候 我们应该使用reducer组合
//  而不是创建多个store


 import { createStore } from 'redux'
 import todoApp from './reducer'
 let store = createStore(todoApp)
 let store = createStore(todoApp, window.STATE_FROM_SERVER)

 import {
   addTodo,
   toggleTodo,
   setVisibilityFilter,
   VisibilityFilters
 } from './actions'
//  初始状态 getStore
 console.log(store.getState())

//  我们还可以在每次state更新的时候 打印日志
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// 接着 我们就可以发起一系列的action
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducer'))
store.dispatch(addTodo('Learn about store'))
// .........
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// 停止监听state更新
unsubscribe();