import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from 'actions'

class Counter extends Component {
  render () {
    const {dispatch, counter} = this.props
    return (
      <div>
        <div>{counter}</div>
        <div>
          <button onClick={e => dispatch(increment())}>+</button>
          <button onClick={e => dispatch(decrement())}>-</button>
        </div>
      </div>
    )
  }
}

Counter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}

export default connect((state) => ({counter: state.counter}))(Counter)
