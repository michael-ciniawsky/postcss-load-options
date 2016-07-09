// ------------------------------------
// #POSTCSS - LOAD OPTIONS
// ------------------------------------

'use strict'

var config = require('cosmiconfig')

var loadOptions = require('./lib/loadOptions')

module.exports = function (options) {
  return config('postcss')
    .catch(function (error) {
      console.log(error)
    })
    .then(function (result) {
      return loadOptions(result.config, options)
    })
}
