// redux规定，将模型的更新逻辑全部集中在一个特定的层
// flux里面的store redux里面的reducer
// flux和redux都不允许程序直接修改数据
// 而是用一个action来对更改进行描述
(state, action) => state // flux的基本模型

// reducer利用纯函数来管理数据
// 在reducer中返回一个新对象来更新state 同时配合object spread运算符提案
// 如果不是纯函数实现的reducer 那么会让时间旅行、记录／回放或者热加载不可实现
function toObservable(store) {
  return {
    subscribe({ next }) {
      const unsubscribe = store.subscribe(() => next(store.getState()))
      next(store.getState())
      return { unsubscribe }
    }
  }
}