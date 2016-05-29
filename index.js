// ------------------------------------
// #POSTCSS - LOAD OPTIONS
// ------------------------------------

'use strict'

const path = require('path')
const config = require('cosmiconfig')

module.exports = function (options) {
  function loadOptions (config) {
    if (typeof options === 'string') {
      options = require(path.join(process.cwd(), options))
    }

    if (typeof options === 'object') {
      for (let option in options) {
        config[option] = options[option]
      }
    }

    delete config.plugins

    options = config

    return options
  }

  return config('postcss')
    .catch((error) => console.log(error))
    .then((result) => loadOptions(result.config))
    .then((options) => console.log(options))
}
