// 状态提升
import React from 'react'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}
/**
 * 温度转化的时候判断一下是否水烧开的的函数
 * @param {any} props 
 * @returns 
 */
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  } else {
    return <p>The water would not boil.</p>;
  }
}

/**
 * author nujey
 * 华氏温度和摄氏温度之间的转化函数
 * @param {any} Fahrenheit 
 * @returns 
 */
function toCelsius(Fahrenheit) {
  return (Fahrenheit - 32) * 5 / 9;
}
/**
 * author nujey
 * 华氏温度和摄氏温度之间的转化函数
 * @param {any} Fahrenheit 
 * @returns 
 */
function Fahrenheit(celsius) {
  return (celsius * 9 / 5) + 32
}

/**
 * 这个函数用来接受一个字符串和一个转化器函数作为参数 并返回一个字符串
 * @param {*} temperature 
 * @param {*} convert 
 */
function tryConvert (temperature, convert) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}
/**
 * 输入温度的子组件
 * @class TemperatureInput
 * @extends {React.Component}
 */
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value)
  }
  render() {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    )
  }
}
/**
 * 温度转化的时候 统一用一个父组件来管理状态 这就是所谓的状态提升
 * @class Calculator
 * @extends {React.Component}
 */
class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    this.state = {
      temperature: '',
      scale: 'c'
    }
  }
  handleCelsiusChange(temperature) {
    this.setState({
      scale: 'c',
      temperature
    })
  }
  handleFahrenheitChange(temperature) {
    this.setState({
      scale: 'f',
      temperature
    })
  }
  render() {
    const temperature = this.state.temperature
    const scale = this.state.scale
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, Fahrenheit) : temperature
    return (
      <div>
        <fieldset>
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />
          
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />

          <BoilingVerdict
            celsius={parseFloat(celsius)} />
        </fieldset>
      </div>
    )
  }
}
export default Calculator;