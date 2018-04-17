import React from 'react'

class Lists extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listArray: []
    }
  }
  render() {
    const listArr = this.props.listArray
    const listItems = listArr.map((item) =>
      <p key={item.age}>{item.age}~{item.name}</p>
    )
    return (
      <div>
        {listItems}
      </div>
    )
  }
}
export default Lists