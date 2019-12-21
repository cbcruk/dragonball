import { map, pick, flow, find, get } from 'lodash/fp'
import { GET } from '../http'

async function fetchTags() {
  const response = await GET('/api/v1/tags', {
    params: {
      display: 'tree',
      kind: 'category',
      lang: 'ko',
      v: 'v1'
    }
  })

  return response.data.tags
}

async function getTagsById(id) {
  const tags = await fetchTags()
  const isAll = id === 'all'
  const select = map(pick(['id', 'title']))

  if (isAll) {
    return select(tags)
  }

  return flow(
    find(t => t.id === parseInt(id, 10)),
    get('tags'),
    select
  )(tags)
}

export default getTagsById
