import { Provider, Component } from 'react'

class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  render() {
    return this.props.children;
  }
}

Provider.childContextTYpes = {
  store: PropTypes.object
}