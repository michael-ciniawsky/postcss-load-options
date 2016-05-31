// ------------------------------------
// #POSTCSS - LOAD OPTIONS
// ------------------------------------

'use strict'

const config = require('cosmiconfig')

const loadOptions = require('./lib/loadOptions')

module.exports = function (options) {
  return config('postcss')
    .catch((error) => console.log(error))
    .then((result) => loadOptions(result.config, options))
}
