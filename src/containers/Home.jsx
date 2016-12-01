import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {HeaderTabs, Tab} from 'react-mdl'
import TopicList from 'components/TopicList'
import {fetchTopics} from 'actions'

const tabMap = {
  0: '',
  1: 'good',
  2: 'share',
  3: 'ask',
  4: 'job'
}

class Tabs extends Component {
  constructor (props) {
    super(props)
    this.tabChange = this.tabChange.bind(this)
  }

  tabChange (tabId) {
    this.props.dispatch(fetchTopics(tabMap[tabId], 1))
  }

  render () {
    return (
      <HeaderTabs ripple style={{background: '#80bd01'}} activeTab={0} onChange={this.tabChange}>
        <Tab>全部</Tab>
        <Tab>精华</Tab>
        <Tab>分享</Tab>
        <Tab>问答</Tab>
        <Tab>招聘</Tab>
      </HeaderTabs>
    )
  }
}

Tabs.propTypes = {
  page: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
}

class Home extends Component {
  componentWillMount () {
    this.props.dispatch(fetchTopics('', 1))
  }

  componentWillReceiveProps ({tab, page}) {
    if (page !== this.props.page || tab !== this.props.tab) {
      this.props.dispatch(fetchTopics(tab, page))
    }
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
  page: PropTypes.number.isRequired,
  tab: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

Home.Tabs = connect(
  ({home: {tab, page}}) => ({tab, page})
)(Tabs)

export default connect(
  ({home: {topics, page, tab}}) => ({topics, page, tab})
)(Home)
