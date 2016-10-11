// ------------------------------------
// #POSTCSS - LOAD OPTIONS
// ------------------------------------

'use strict'

var config = require('cosmiconfig')

var loadOptions = require('./lib/options')

/**
 * @author Michael Ciniawsky (@michael-ciniawsky) <michael.ciniawsky@gmail.com>
 * @description Autoload Options for PostCSS
 *
 *
 * @module postcss-load-options
 * @version 1.0.0
 *
 * @requires cosmiconfig
 * @requires lib/options
 *
 * @method options
 *
 * @param  {Object} ctx Context
 * @param  {String} path Directory
 * @param  {Object} options Options
 * @return {Object} options PostCSS Options
 */
module.exports = function optionsrc (ctx, path, options) {
  const defaults = {
    cwd: process.cwd(),
    env: process.env.NODE_ENV
  }

  ctx = Object.assign(defaults, ctx) || defaults
  path = path || process.cwd()
  options = options || {}

  return config('postcss', options)
    .load(path)
    .then((result) => {
      result = result.config || {}
      return result
    })
    .then((options) => {
      if (typeof options === 'function') {
        options = options(ctx)
      }

      if (typeof options === 'object') {
        options = Object.assign(options, ctx)
      }

      return options
    })
    .then((options) => {
      return loadOptions(options)
    })
    .catch(function (err) {
      console.log(err)
    })
}
