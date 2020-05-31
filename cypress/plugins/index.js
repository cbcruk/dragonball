const preprocessor = require('cypress-react-unit-test/plugins/react-scripts')

module.exports = (on, config) => {
  preprocessor(on, config)
  return config
}
