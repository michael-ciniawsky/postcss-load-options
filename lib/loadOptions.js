// ------------------------------------
// #POSTCSS - LOAD OPTIONS - LIB
// ------------------------------------

'use strict'

const path = require('path')

module.exports = function loadOptions (config, options) {
  if (typeof options === 'string') {
    options = require(path.join(process.cwd(), options))
  }

  if (options) {
    for (let option in options) {
      config[option] = options[option]
    }
  } else {
    options = config
  }

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
