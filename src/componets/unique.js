import React from 'react'

function unique1(arr) {
  var res = [arr[0]]
  for(var i = 0; i < arr.length; i++) {
    var flag = false
    for(var j = 0; j < res.length; j++) {
      if (arr[i] === res[j] ) {
        flag = true
        break
      }
    }
    if(!flag) {
      res.push(arr[i])
    }
  }
  return res
}
function uniqueSort(arr) {
  var arr2 = arr.sort()
  var res = [arr2[0]]
  for(var i =1; i < arr2.length; i++) {
    if(arr2[i] !== res[res.length - 1]) {
      res.push(arr2[i])
    }
  }
  return res
}
function unqueObject(arr) {
  var res = []
  var json = {}
  for(var i = 0; i < arr.length; i++) {
    if(!json[arr[i]]) {
      res.push(arr[i])
      json[arr[i]] = i
    }
  }
  return res
}
class Unique extends React.Component{
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      newArr: [1, 2, 3, 1, 2, 3, 3,4,5,6,7,5,4,3,2,1]
    }
  }
  handleClick() {
    this.setState({
      newArr: unqueObject(this.state.newArr)
    })
  }
  render() {
    return(
      <div>
        <div onClick={this.handleClick}>点击我去重</div>
        <p>{this.state.newArr}</p>
      </div>
    )
  }
}

export default Unique
