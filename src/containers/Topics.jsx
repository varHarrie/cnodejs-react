import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Tabs, Tab, List, ListItem, ListItemContent} from 'react-mdl'
import {fetchTopics} from 'actions'

const tabMap = {
  0: '',
  1: 'good',
  2: 'share',
  3: 'ask',
  4: 'job'
}

function Header (props) {
  return (
    <Tabs ripple activeTab={0} onChange={(tab) => props.tabChange(tabMap[tab], 1)}>
      <Tab>全部</Tab>
      <Tab>精华</Tab>
      <Tab>分享</Tab>
      <Tab>问答</Tab>
      <Tab>招聘</Tab>
    </Tabs>
  )
}

Header.propTypes = {
  tabChange: PropTypes.func.isRequired
}

function TopicList (props) {
  return (
    <List>
      {props.topics.map((topic) =>
        <ListItem key={topic.id} twoLine>
          <Link to={`/topics/${topic.id}`}>
            <ListItemContent avatar={
              <img src={topic.author.avatar_url} />
            } subtitle={topic.author.loginname + ' ' + topic.create_at}>
              {topic.title}
            </ListItemContent>
          </Link>
        </ListItem>
      )}
    </List>
  )
}

TopicList.propTypes = {
  topics: PropTypes.array.isRequired
}

class Topics extends Component {
  constructor (props, context) {
    super(props, context)
    this.refresh = this.refresh.bind(this)
  }

  componentWillMount () {
    this.refresh()
  }

  refresh (tab = '', page = 1) {
    this.props.dispatch(fetchTopics(tab, page))
  }

  render () {
    const {tab, topics} = this.props

    return (
      <div>
        <Header tab={tab} tabChange={this.refresh} />
        <TopicList topics={topics} />
      </div>
    )
  }
}

Topics.propTypes = {
  topics: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  tab: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect(
  ({home: {topics, page, tab}}) => ({topics, page, tab})
)(Topics)
