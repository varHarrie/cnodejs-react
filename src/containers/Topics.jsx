import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {fetchTopics} from 'actions'
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs'
import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'

function Header (props) {
  const appBarStyle = {flexWrap: 'wrap', background: '#80bd01'}
  const tabsStyle = {width: '100%'}
  const tabStyle = {background: '#80bd01'}
  return (
    <div className='page-topics__header'>
      <AppBar title='Cnode' style={appBarStyle}>
        <Tabs onChange={(tab) => props.tabChange(tab, 1)} style={tabsStyle}>
          <Tab label='全部' value='' style={tabStyle} />
          <Tab label='精华' value='good' style={tabStyle} />
          <Tab label='分享' value='share' style={tabStyle} />
          <Tab label='问答' value='ask' style={tabStyle} />
          <Tab label='招聘' value='job' style={tabStyle} />
        </Tabs>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  tabChange: PropTypes.func.isRequired
}

function TopicList (props) {
  return (
    <div className='page-topics__list' onScroll={props.onScroll}>
      <List>
        {props.topics.map((topic) =>
          <Link key={topic.id} to={`/topics/${topic.id}`}>
            <ListItem
              leftAvatar={<Avatar src={topic.author.avatar_url} />}
              primaryText={<div className='ellipsis'>{topic.title}</div>}
              secondaryText={topic.author.loginname + ' ' + topic.create_at}
              secondaryTextLines={1} />
            <Divider inset />
          </Link>
        )}
      </List>
    </div>
  )
}

TopicList.propTypes = {
  topics: PropTypes.array.isRequired,
  onScroll: PropTypes.func
}

class Topics extends Component {
  constructor (props, context) {
    super(props, context)
    this.load = this.load.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    this.load()
  }

  load (tab = '', page = 1) {
    this.props.dispatch(fetchTopics(tab, page))
  }

  handleScroll ({target: {offsetHeight, scrollTop, scrollHeight}}) {
    const {tab, page, loading} = this.props
    if (loading) return
    if (scrollHeight - offsetHeight - scrollTop < 100) {
      this.load(tab, page + 1)
    }
  }

  render () {
    const {topics} = this.props
    return (
      <div className='page page-topics'>
        <Header tabChange={this.load} />
        <TopicList topics={topics} onScroll={this.handleScroll} />
      </div>
    )
  }
}

Topics.propTypes = {
  topics: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  tab: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect(
  ({topics: {topics, page, tab, loading}}) => ({topics, page, tab, loading})
)(Topics)
