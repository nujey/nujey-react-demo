import React from 'react'
import { SubstringUrl } from "./urlSubstring";
import ProtoTest from './prototypeTwo'

function compare(property) {
  return function(obj1, obj2) {
    const val1 = obj1[property]
    const val2 = obj2[property]
    return val1 - val2
  }
}
class ObjArr extends React.Component {
  constructor(props) {
    super(props)
    this.handleSort = this.handleSort.bind(this)
    this.state = {
      arr: [{
        price: 10,
        name: 'A'
      }, {
        price: 4,
        name: 'B'
      }, {
        price: 21,
        name: 'C'
      }, {
        price: 0,
        name: 'D'
      }],
      arrNumber: [10, 16, 2, 14, 18, 3, 15]
    }
  }
  handleSort() {
    // 数组排序的时候 sort是按照assic 码来排序的 也就是会按照字符串的规则来排序
    // 所以需要对sort进行一个处理
    const newarr = this.state.arrNumber.sort(function(a, b) {
      return b - a
    })
    const newArrObj = this.state.arr.sort(compare('price'))
    this.setState({
      arr: newArrObj.slice(0)
    })
  }
  render() {
    const listItem = this.state.arr
    const listItems = listItem.map((item) => 
      <span key={item.price} className="list-span">{item.name}</span>
    )
    return(
      <div>
        <div>{listItems}</div>
        <button onClick={this.handleSort}>排序</button>
        ==============================================
        <SubstringUrl />
        ==============================================<br/>
        <ProtoTest />
      </div>
    )
  }
}

export default ObjArr
