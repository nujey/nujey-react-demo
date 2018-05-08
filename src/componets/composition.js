import React from 'react';
import './composition.css';

function FancyBorder (props) {
  return (
    <div className={'fan fan-'+props.color}>
      {props.children}
    </div>
  )
}
function Split (props) {
  return (
    <div>
      <div className="split-left">
        {props.left}
      </div>
      <div className="split-right">
        {props.right}
      </div>
    </div>
  )
}
class Composition extends React.Component {
  render() {
    return (
      <div>
        <FancyBorder color="blue" children="web-home"/>
        <Split
          left = {
            <FancyBorder color="red" children="left"/>
          }
          right = {
            <FancyBorder color="red" children="right"/>
          }
        ></Split>
      </div>
      
    )
  }
}

export default Composition
