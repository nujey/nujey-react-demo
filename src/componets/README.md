这里记录了react的类型限制的几种格式

# 组件props的数据类型限制汇总
ComponentName.propTypes = {
  默认情况下的基本类型
  # propsName: PropsTypes.array/  bool/ func/ number/ object/ string/ symbol
  

    // 任何东西都可以被渲染成为numbers strings elements
  # propsNode: PropTypes.node

    // 一个react元素
  # propsElement: PropTypes.element

    // 当然也可以声明一个prop是类的一个实例 使用Js的instanceOf
  # propsMsg: PropTypes.instranceOf(Msg)

    // 也可以把prop是特定的一些值 类似于枚举
  # propsEnum: PropTypes.oneOf(['a', 'b', 'c'])

    // 也可以定义一个对象可以是多个类型其中之一
  #  propsUnion: PropTypes.oneOfType([
       Proptypes.number,
       PropTypes.string,
       ...
       PropTypes.instranceOf(Msg)
  #  ])

    // 一个某种类型的数组
  # optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

    // 属性值为某种类型的对象
  # optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // 一个特定形式的对象
  # optionalObjectWithShape: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number
  # }),

    // 你可以使用 `isRequired' 链接上述任何一个，以确保在没有提供 prop 的情况下显示警告。
  # requiredFunc: PropTypes.func.isRequired,

    // 任何数据类型的值
  # requiredAny: PropTypes.any.isRequired,

    // 你也可以声明自定义的验证器。如果验证失败返回 Error 对象。不要使用 `console.warn` 或者 throw ，
    // 因为这不会在 `oneOfType` 类型的验证器中起作用。
  # customProp: function(props, propName, componentName) {
      if (!/matchme/.test(props[propName])) {
        return new Error(
          'Invalid prop `' + propName + '` supplied to' +
          ' `' + componentName + '`. Validation failed.'
        );
      }
  # },

    // 也可以声明`arrayOf`和`objectOf`类型的验证器，如果验证失败需要返回Error对象。
    // 会在数组或者对象的每一个元素上调用验证器。验证器的前两个参数分别是数组或者对象本身，
    // 以及当前元素的键值。
  # customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName){
      if (!/matchme/.test(propValue[key])) {
        return new Error(
          'Invalid prop `' + propFullName + '` supplied to' +
          ' `' + componentName + '`. Validation failed.'
        );
      }
  # })
}

# 当然这里也可以设定props默认值
ComponentName.defaultProps = {
  name: 'AAA'
}

# react组件生命周期
   # 装载
     constructor // 如果是无状态的react组件 就不需要定义构造函数
          // 作用： 初始化state
                   绑定成员函数的 this环境 bind(this)
     getInitialState
     getDefaultProps
          // 这两个函数直邮在react.createClass 方法创建的组件类才会用到
          // 在ES6创建的组件类里面 是用不到的
     componentWillMount
          // 在调用render之前调用
          // 在这里做的事情都可以提前到constructor中去做 所以仅仅是为了和后面的Did函数对称
          可以在服务器端和浏览器端被调用
     render
          // render函数是组件中最重要的函数
          render函数不做实际的渲染动作 只是返回一个JSX描述的结构 
          当没有要渲染的东西的时候 就返回true 或者false
          参数是this.state this.props 而不是this.setState 因为 render是一个纯函数
          render函数本身不往DOM树上面去渲染东西 只是返回一个JSX表示的对象
     componentDidMount
          // 在调用render之后调用
          该函数被调用的时候 代表render函数已经返回东西 并且已经渲染到了DOM树上面
          只能在浏览器端被调用
   # 更新
     componentWillReceiveProps
          // 只要是父组件的render函数被调用 就会调用这个函数
          只有当新的props值的时候 才会出发这个函数 this.setState不会出发这个函数
     shouldComponentUpdate
          // 除了render函数之外 生命周期中最重要的一个函数
          决定了什么时候不需要渲染组件
          在更新的过程当中 nextProps，nextState  和this.props this.state 来判断是返回true 还是false 
          如果返回的是true 也就是不想等的时候 接下来会调用后面的三个函数
     componentWillUpdate
          // 
     render
          // render函数决定了该渲染什么 
     componentDidUpdate
          这个函数里面可以调用其他库的代码 比如JQuery
   # 卸载
      componentWillUnmount
          // 卸载过程 只涉及一个函数 当组件要从DOM树上面删除掉之前 函数会被调用 所以做一些请理性的工作 
          // 比如 之前添加的jq的一些DOM元素 就需要清理掉