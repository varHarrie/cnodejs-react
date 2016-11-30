import React, {Component} from 'react'
import {HeaderTabs, Tab} from 'react-mdl'
import TopicList from 'components/TopicList'

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
  render () {
    return (
      <div>
        <TopicList />
      </div>
    )
  }
}

Home.Tabs = Tabs

export default Home
