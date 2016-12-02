import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchTopic} from 'actions'

class Topic extends Component {

  componentDidMount () {
    const topicId = this.props.params.topicId
    this.props.dispatch(fetchTopic(topicId))
  }

  render () {
    return (
      <div>
        topic
      </div>
    )
  }
}

Topic.propTypes = {
  params: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect()(Topic)
