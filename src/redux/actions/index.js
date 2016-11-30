import {createActionAsync} from 'redux-act-async'

import * as apis from 'apis'

export const fetchTopics = createActionAsync('topics', (tab, page) => {
  return apis.fetchTopics(tab, page).then(({data: {success, data}}) => {
    return {
      tab,
      page,
      topics: data
    }
  })
})
