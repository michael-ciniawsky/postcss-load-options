// ------------------------------------
// #POSTCSS - LOAD OPTIONS - LIB
// ------------------------------------

'use strict'

/**
 *
 * @method loadOptions
 *
 * @param  {Object} options PostCSS Config Options
 *
 * @return {Object} options PostCSS Options
 */
module.exports = function loadOptions (options) {
  if (options.parser) {
    options.parser = require(options.parser)
  }

  if (options.syntax) {
    options.syntax = require(options.syntax)
  }

  if (options.stringifier) {
    options.stringifier = require(options.stringifier)
  }

  if (options.plugins) {
    delete options.plugins
  }

  return options
}
