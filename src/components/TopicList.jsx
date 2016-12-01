import React, {Component, PropTypes} from 'react'
import {List, ListItem, ListItemContent} from 'react-mdl'

class TopicList extends Component {
  render () {
    return (
      <List>
        {this.props.topics.map((topic) =>
          <ListItem key={topic.id} twoLine>
            <ListItemContent avatar={
              <img src={topic.author.avatar_url} />
            } subtitle={topic.author.loginname + ' ' + topic.create_at}>
              {topic.title}
            </ListItemContent>
          </ListItem>
        )}
      </List>
    )
  }
}

TopicList.propTypes = {
  topics: PropTypes.array.isRequired
}

export default TopicList
