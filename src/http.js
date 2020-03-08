import Axios from 'axios'

const baseUrls = new Map([
  ['wanted', 'https://www.wanted.co.kr'],
  ['mailchimp', 'https://us11.api.mailchimp.com']
])
const isDev = process.env.NODE_ENV === 'development'

const wantedInstance = Axios.create({
  baseURL: isDev ? '' : baseUrls.get('wanted')
})

export const mailchimpInstance = Axios.create({
  baseURL: isDev ? '' : baseUrls.get('mailchimp'),
  headers: {
    authorization: `apikey ${process.env.REACT_APP_MAILCHIMP_API_KEY}`
  }
})

export const GET = wantedInstance.get
export const POST = wantedInstance.post
