import React, {Component, PropTypes} from 'react'
import {List, ListItem, ListItemContent} from 'react-mdl'

class TopicList extends Component {
  render () {
    return (
      <List>
        <ListItem twoLine>
          <ListItemContent avatar='x' subtitle='subtitle'>content</ListItemContent>
        </ListItem>
        <ListItem twoLine>
          <ListItemContent avatar='x' subtitle='subtitle'>content</ListItemContent>
        </ListItem>
        <ListItem twoLine>
          <ListItemContent avatar='x' subtitle='subtitle'>content</ListItemContent>
        </ListItem>
      </List>
    )
  }
}

TopicList.propTypes = {

}

export default TopicList
