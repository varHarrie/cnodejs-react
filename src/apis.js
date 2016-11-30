import axios from 'axios'

const http = axios.create({
  baseURL: 'https://cnodejs.org/api/v1'
})

// 获取主题列表
export const fetchTopics = (tab = '', page = 1, limit = 30, mdrender = 'true') => {
  return http.get('/topics', {params: {tab, page, limit, mdrender}})
}

// 获取主题详情
export const fetchTopic = (topicId, accesstoken = '', mdrender = 'true') => {
  return http.get(`/topic/${topicId}`, {params: {accesstoken, mdrender}})
}

// 新建主题
export const createTopic = (accesstoken, tab, title, content) => {
  return http.post('/topics/', {accesstoken, tab, title, content})
}

// 编辑主题
export const editTopic = (accesstoken, topicId, tab, title, content) => {
  return http.post('/topics/update', {accesstoken, 'topic_id': topicId, tab, title, content})
}

// 收藏主题
export const collectTopic = (accesstoken, topicId) => {
  return http.post('/topic_collect/collect', {accesstoken, 'topic_id': topicId})
}

// 取消收藏主题
export const decollectTopic = (accesstoken, topicId) => {
  return http.post('/topic_collect/de_collect', {accesstoken, 'topic_id': topicId})
}

// 获取收藏主题列表
export const fetchCollectedTopics = (loginName) => {
  return http.get(`/topic_collect/${loginName}`)
}

// 发表评论
export const reply = (topicId, accesstoken, content, replyId) => {
  return http.post(`/topic/${topicId}/replies`, {accesstoken, content, 'reply_id': replyId})
}

// 点赞
export const praise = (replyId, accesstoken) => {
  return http.post(`/reply/${replyId}/ups`, {accesstoken})
}

// 获取用户详情
export const fetchUser = (loginName) => {
  return http.get(`/user/${loginName}`)
}

// 登陆验证
export const auth = (accesstoken) => {
  return http.post('/accesstoken', {accesstoken})
}

// 获取未读消息个数
export const fetchMessageCount = (accesstoken) => {
  return http.get('/message/count ', {params: {accesstoken}})
}

// 获取消息列表
export const fetchMessage = (accesstoken, mdrender = 'true') => {
  return http.get('/messages', {params: {accesstoken, mdrender}})
}

// 标记所有消息已读
export const markMessages = (accesstoken) => {
  return http.post('/message/mark_all', {accesstoken})
}
