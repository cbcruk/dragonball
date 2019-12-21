const Axios = require('axios')
const { MAILCHIMP_API_KEY } = require('../env.json')

function postTemplates(data) {
  return Axios({
    method: 'POST',
    url: 'https://us11.api.mailchimp.com/3.0/templates',
    data,
    headers: {
      authorization: `apikey ${MAILCHIMP_API_KEY}`
    }
  })
}

module.exports = {
  postTemplates
}
