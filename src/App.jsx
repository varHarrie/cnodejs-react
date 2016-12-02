import {Component, PropTypes} from 'react'

class App extends Component {
  render () {
    return (
      this.props.children
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

export default App
