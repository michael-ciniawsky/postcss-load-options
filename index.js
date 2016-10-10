// ------------------------------------
// #POSTCSS - LOAD OPTIONS
// ------------------------------------

'use strict'

var config = require('cosmiconfig')
var assign = require('object-assign')

var loadOptions = require('./lib/loadOptions')

/**
 * @author Michael Ciniawsky (@michael-ciniawsky) <michael.ciniawsky@gmail.com>
 * @description Autoload Options for PostCSS
 *
 *
 * @module postcss-load-options
 * @version 1.0.0
 *
 * @requires cosmiconfig
 * @requires object-assign
 * @requires lib/loadOptions
 *
 * @method options
 *
 * @param  {Object} ctx Context
 * @param  {String} path Directory to search for config file
 * @param  {Object} options cosmiconfig Options
 * @return {Object} options PostCSS Options
 */
module.exports = function options (ctx, path, options) {
  path = path || process.cwd()
  options = options || {}

  return config('postcss', options)
    .load(path)
    .then(function (result) {
      result = result.config || {}
      return result
    })
    .then(function (options) {
      if (typeof options === 'function') {
        options = ctx ? options(ctx) : options()
      }

      if (typeof options === 'object') {
        options = ctx ? assign(options, ctx) : options
      }

      return options
    })
    .then(function (options) {
      return loadOptions(options)
    })
    .catch(function (error) {
      console.log(error)
    })
}
