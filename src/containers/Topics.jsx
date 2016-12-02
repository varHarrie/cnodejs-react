import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Layout, Header, Drawer, Navigation, Content, HeaderRow, HeaderTabs, Tab, List, ListItem, ListItemContent} from 'react-mdl'
import {fetchTopics} from 'actions'

const tabMap = {
  0: '',
  1: 'good',
  2: 'share',
  3: 'ask',
  4: 'job'
}

function TopHeader (props) {
  return (
    <Header style={{background: '#80bd01'}}>
      <HeaderRow title='Cnode' />
      <HeaderTabs ripple style={{background: '#80bd01'}} activeTab={0} onChange={(tab) => props.tabChange(tabMap[tab], 1)}>
        <Tab>全部</Tab>
        <Tab>精华</Tab>
        <Tab>分享</Tab>
        <Tab>问答</Tab>
        <Tab>招聘</Tab>
      </HeaderTabs>
    </Header>
  )
}

TopHeader.propTypes = {
  tabChange: PropTypes.func.isRequired
}

function SideMenu (props) {
  return (
    <Drawer title='菜单'>
      <Navigation>
        <a href='#'>论坛</a>
        <a href='#'>个人</a>
      </Navigation>
    </Drawer>
  )
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
    this.load = this.load.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    this.load()
    this.refs.container.parentNode.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    this.refs.container.parentNode.removeEventListener('scroll', this.handleScroll)
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
    const {tab, topics} = this.props

    return (
      <div style={{height: '100%', position: 'relative'}}>
        <Layout fixedHeader fixedTabs>
          <TopHeader tab={tab} tabChange={this.load} />
          <SideMenu />
          <Content>
            <div ref='container'>
              <TopicList topics={topics} />
            </div>
          </Content>
        </Layout>
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
