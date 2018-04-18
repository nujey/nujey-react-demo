/**
 * 该章主要讲述构造函数的封装
 */
import React from 'react'

// 这节我们主要学习js的继承方式---------类继承

// 原型模式的改进
function cat(name, color) {
  return {
    name: name,
    color: color
  }
}
// 构造函数模式
// 对构造函数使用new操作符 就能生成实例 对象 并且this变量会绑定在实例对象不
function CatThis(name, color) {
  this.name = name;
  this.color = color
}
// Prototype模式
// 每一个构造函数 都会有prototype属性 指向另一个对象 这个对象的所有属性和方法 都会被构造函数的实例继承
// 这意味着 我们可以把不变的属性和方法 直接定义在prototype上
function CatPrototype(name, color) {
  this.name = name
  this.color = color
}
CatPrototype.prototype.type = '猫科动物'

class ProtoTest extends React.Component {
  constructor(props) {
    super(props)
    this.handleCat = this.handleCat.bind(this)
  }
  handleCat() {
    console.log(cat('大毛', 'red'))
    const cat1 = new CatThis('小猫1', '黄色')
    const cat2 = new CatThis('小猫2', '绿色')
    // cat1 和cat2 自动包含一个constructor属性 指向构造函数
    console.log(cat1.constructor === CatThis) // true
    // 如果要验证原型对象和实例对象之间的关系 那么我们就使用instanceof
    console.log(cat1 instanceof CatThis) // true
  }
  handleCatPrototype() {
    const cat1 = new CatPrototype('大猫', 'red')
    const cat2 = new CatPrototype('二猫', 'green')
    console.log(cat1, cat2)
  }
  render() {
    return(
      <div>
        <button onClick={this.handleCat}>点击我试试console呀</button>
        <button onClick={this.handleCatPrototype}>点击我试试consoleprototype呀</button>
      </div>
    )
  }
}

export default ProtoTest
