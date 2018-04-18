/**
 * 该章主要讲述 构造函数的继承
 */
import React from 'react'

// 先定义一个动物对象的构造函数
function Animal() {
  this.species = '动物'
}
/**
 * 猫对象的构造函数
 * @param {String} name 
 * @param {String} color 
 */
function Cat(name, color) {
  this.name = name
  this.color = color
}
class ProtoTest extends React.Component {
  constructor(props) {
    super(props)
    this.handleOne = this.handleOne.bind(this)
  }
  // 我们需要实现的就是 '猫‘    继承  ’动物‘
  // 构造函数的绑定
  handleOne() {
    // 利用call或者apply方法 将父对象的构造函数绑定在子对象上面 子对象构造函数中apply
    function CatOne(name, color) {
      Animal.apply(this, arguments)
      this.name = name
      this.color = color
    }
    const cat1 = new CatOne('大猫', 'sss')
    console.log(cat1)
  }
  // prototype 模式
  handleTwo() {
    // 我们将Cat的prototype对象指向一个Animal的实例。
    Cat.Prototype = new Animal()
    // 
    Cat.Prototype.constructor = Cat
    const catVal = new Cat('猫妮子', 'blue')
    console.log(catVal)
  }
  render() {
    return(
      <div>
        <button onClick={this.handleOne}>点击我handleOne</button><br/>
        <button onClick={this.handleTwo}>点击我handleTwo</button>
      </div>
    )
  }
}

export default ProtoTest
