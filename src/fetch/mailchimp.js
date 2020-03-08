import template from './template'
import { mailchimpInstance } from '../http'

export async function postEmailTemplate(name = 'TEST_EMAIL_TEMPLATE', body) {
  const html = template(body)

  await mailchimpInstance({
    method: 'POST',
    url: '/3.0/templates',
    data: { name, html }
  })
}
