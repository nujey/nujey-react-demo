import React, {Component} from 'react'

class Blogs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogArray: []
    }
  }
  render() {
    const sidebar = this.props.blogArray.map((item) => 
      <span key={item.id}>{item.title}</span>
    )
    const sideContent = this.props.blogArray.map((item) =>
      <h2 key={item.id}>
        {item.title}
        <span>{item.content}</span>
      </h2>
    )
    return (
      <div>
        {sidebar}
        <hr/>
        {sideContent}
      </div>
    )
  }
}
export default Blogs
