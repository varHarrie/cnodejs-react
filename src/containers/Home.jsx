import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {HeaderTabs, Tab} from 'react-mdl'
import TopicList from 'components/TopicList'
import {fetchTopics} from 'actions'

class Tabs extends Component {
  render () {
    return (
      <HeaderTabs ripple style={{background: '#80bd01'}} activeTab={0} onChange={(tabId) => {}}>
        <Tab>全部</Tab>
        <Tab>精华</Tab>
        <Tab>分享</Tab>
        <Tab>问答</Tab>
        <Tab>招聘</Tab>
      </HeaderTabs>
    )
  }
}

class Home extends Component {
  componentWillMount () {
    this.props.dispatch(fetchTopics('', 1))
  }

  componentWillReceiveProps (nextProps) {
    const {tab, page} = nextProps
    this.props.dispatch(fetchTopics(tab, page))
  }

  render () {
    const topics = this.props.topics
    return (
      <div>
        <TopicList topics={topics} />
      </div>
    )
  }
}

Home.propTypes = {
  topics: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

Home.Tabs = Tabs

export default connect((state) => ({topics: state.topics}))(Home)
