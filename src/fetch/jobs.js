import bluebird from 'bluebird'
import { flow, flatten, uniqBy, get } from 'lodash/fp'
import { GET } from '../http'
import { JOB_CATEGORIES } from '../constants'
import getTagsById from './tags'

async function fetchJobs(next, items = []) {
  const response = await GET(next)
  const { data, links } = response.data
  const mergeditems = items.concat(data)

  if (links.next) {
    return fetchJobs(links.next, mergeditems)
  }

  return mergeditems
}

function getCompanies({ jobs, companyIds, categoryId }) {
  return companyIds.split(',').map(id => {
    const companyJobs = jobs.filter(
      job => get('company.id')(job) === parseInt(id, 10)
    )

    if (companyJobs.length === 0) {
      return null
    }

    const {
      id: jobId,
      company,
      position: jobPosition,
      title_img
    } = companyJobs[0]
    const hasMore = companyJobs.length > 1
    const link = hasMore ? `company/${company.id}` : `wd/${jobId}`
    const position = hasMore
      ? `${JOB_CATEGORIES[categoryId]} 직군 ${companyJobs.length}개 포지션 채용중`
      : `${jobPosition} 채용중`

    return {
      id: company.id,
      name: company.name,
      image: title_img.origin,
      link: `https://www.wanted.co.kr/${link}`,
      position
    }
  })
}

export async function getJobs(categoryId, companyIds) {
  const tags = await getTagsById(categoryId)
  const items = await bluebird.map(
    tags,
    async ({ id, title }) => {
      const jobs = await fetchJobs(
        `/api/v4/jobs?country=kr&tag_type_id=${id}&job_sort=job.latest_order&years=-1&locations=all&limit=100`
      )

      return jobs.filter(Boolean).map(job => ({
        ...job,
        tag_type_id: id,
        tag_type_title: title
      }))
    },
    {
      concurrency: 3
    }
  )
  const jobs = flow(flatten, uniqBy('id'))(items)
  const result = getCompanies({ jobs, companyIds, categoryId })

  return result
}
