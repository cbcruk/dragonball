import Axios from 'axios'

const isDev = process.env.NODE_ENV === 'development'

const instance = Axios.create({
  baseURL: isDev ? '' : 'https://www.wanted.co.kr'
})

export const GET = instance.get
export const POST = instance.post
