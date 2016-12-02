import {createActionAsync} from 'redux-act-async'

import * as apis from 'apis'

export const fetchTopics = createActionAsync('topics', (tab, page) => {
  return apis.fetchTopics(tab, page).then(({data: {success, data}}) => {
    if (!success) throw new Error()
    return {
      tab,
      page,
      topics: data
    }
  })
})

export const fetchTopic = createActionAsync('topic', (topicId) => {
  return apis.fetchTopic(topicId).then(({data: {success, data}}) => {
    if (!success) throw new Error()
    const {author, author_id, id, tab, title, content, good, top, is_collect, create_at, last_reply_at, reply_count, visit_count, replies} = data
    return {
      author: Object.assign({}, author, {id: author_id}),
      topic: {id, tab, title, content, good, top, is_collect, create_at, last_reply_at, reply_count, visit_count},
      replies: replies
    }
  })
})
