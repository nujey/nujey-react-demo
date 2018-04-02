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
