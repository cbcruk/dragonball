const fs = require('fs-extra')

async function init(hasElectron) {
  try {
    if (hasElectron) {
      await fs.copy('./electron', './build/electron')
    }
    await fs.copy(
      './node_modules/webextension-polyfill/dist/browser-polyfill.min.js',
      './build/browser-polyfill.min.js'
    )
  } catch (error) {
    console.error(error)
  }
}

init()
