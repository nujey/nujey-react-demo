import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// 引入我们的第一个组件
import ClickCounter from './componets/clickCounter';
import Login from './componets/login'
import Onetest from './componets/oneTest'
import Clock from './componets/newDate'
import Lists from './componets/lists'
import Blogs from './componets/keys'
import NameForm from './componets/forms'
import StatusUp from './componets/statusUp'
import FilterableProductTable from './componets/search'
import Refs from './componets/refs'
import GrandParent from './componets/parentRef'
// 在使用我们的组件的时候 必须是首字母大写 这样是为了让react知道 是HTML的元素
// 还是我们自定义的组件类 如果不大写 那么react是没办法认识的 所以也就得不到我们想要的结果

// 用来模拟后端返回的列表
const products = [{
  category: "Sporting Goods",
  price: "$49.99",
  stocked: true,
  name: "Football"
}, {
  category: "Sporting Goods",
  price: "$9.99",
  stocked: true,
  name: "Baseball"
}, {
  category: "Sporting Goods", 
  price: "$29.99", 
  stocked: false, 
  name: "Basketball"
}, {
  category: "Electronics", 
  price: "$99.99", 
  stocked: true, 
  name: "iPod Touch"
}, {
  category: "Electronics",
  price: "$399.99",
  stocked: false,
  name: "iPhone 5"
}, {
  category: "Electronics",
  price: "$199.99",
  stocked: true,
  name: "Nexus 7"
}];
class App extends Component {
  constructor(props) {
    super(props)
    // 绑定this的环境
    this.onCounterUpdate = this.onCounterUpdate.bind(this)

    this.initValues = [1, 20, 30];
    const initSum = this.initValues.reduce((a, b) => a+b, 0);

    this.state = {
      sum: initSum,
      testArray: [{
        name: '第一名',
        age: '18',
        id: 1,
        title: '我是标题1',
        content: '我其实真的可以很帅哦！'
      }, {
        name: '第二名',
        age: '20',
        id: 2,
        title: '我是标题2',
        content: '我其实真的可以很酷哦！'
      }]
    };
  }
  onCounterUpdate(newValue, prevValue) {
    const valueChange = newValue - prevValue;
    this.setState({
      sum: this.state.sum + valueChange
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>=====这里是一个组件分界线=====</h2>
        <ClickCounter onUpdate={ this.onCounterUpdate } num={1} />
        <h2>=====这里是一个组件分界线=====</h2>
        <Login />
        <h2>=====这里是一个组件分界线=====</h2>
        <Onetest name="中国"/>
        <h2>=====这里是一个组件分界线=====</h2>
        <Clock />
        <h2>=====这里是一个组件分界线=====</h2>
        <Lists listArray={this.state.testArray}/>
        <h2>=====这里是一个组件分界线=====</h2>
        <Blogs blogArray={this.state.testArray}/>
        <h2>=====这里是一个组件分界线=====</h2>
        <hr/>
        <NameForm />
        <hr/>
        <StatusUp scale="c"/>
        <hr/>
        <FilterableProductTable products={products}/>
        <hr/>
        <h2>=====这里是一个组件分界线=====</h2>
        <Refs name="张锋"/>
        <GrandParent />
      </div>
    );
  }
}

export default App;
