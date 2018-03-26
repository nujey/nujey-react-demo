import React, { Component } from 'react'

class NameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputchange = this.handleInputchange.bind(this)
  }
  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()})
  }
  handleSubmit(event) {
    alert(this.state.value)
    event.preventDefault();
  }
  handleInputchange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            name: 
            <input tyoe="text" onChange={this.handleChange} value={this.state.value} />
            <input type="submit" value="submit"/>
            <select onChange={this.handleChange} value={this.state.value}>
              <option value="111" defaultValue>111</option>
              <option value="222">222</option>
              <option value="333">333</option>
            </select><br/>
            Upload file: <input type="file" ref= { input => {
              this.fileInput = input
            }} />
            <br/>
            Is Going: <input name="isGoing" 
                             type="checkbox"
                             checked={this.state.isGoing}
                             onChange={this.handleInputchange}
                             />
            <br/>
            number Guests: <input name="numberOfGuests"
                                  type="number"
                                  value={this.state.numberOfGuests}
                                  onChange={this.handleInputchange}
                                  />
          </label>
        </form>
      </div>
    )
  }
}

export default NameForm