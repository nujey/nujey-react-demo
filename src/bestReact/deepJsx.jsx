// react必须在作用域中
import React from 'react'

<MyButton color="blue" shadowSize={2}>
  click me
</MyButton>

React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'clice me'
)