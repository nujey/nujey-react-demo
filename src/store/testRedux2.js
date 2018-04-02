// 整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 
// 只存在于唯一一个 store 中
console.log(store.getState())
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    }, {
      text: 'Keep all state in a single tree',
      completed: false,
    }
  ]
}
// state是一个只读的
// 唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象
// Action 就是普通对象而已
store.dispatch({
  type: 'COMPLETE_TODO',
  index: 1
})
store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
})

// 我们用纯函数来执行修改
// 为了描述axtion如何改变state tree 我们需要编写reducers
// Reducer 只是一些纯函数，它接收先前的 state 和 action，并返回新的 state
