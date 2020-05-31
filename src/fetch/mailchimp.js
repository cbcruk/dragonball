import template from './template'
import { mailchimpInstance } from '../http'

export async function postEmailTemplate(name = 'TEST_EMAIL_TEMPLATE', body) {
  const { minify } = window.require('html-minifier')
  const rawHtml = template(body)
  const html = minify(rawHtml, {
    collapseWhitespace: true,
    minifyCSS: true,
  })

  await mailchimpInstance({
    method: 'POST',
    url: '/3.0/templates',
    data: { name, html },
  })
}
