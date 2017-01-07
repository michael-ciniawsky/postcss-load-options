// ------------------------------------
// #POSTCSS - LOAD OPTIONS - TEST - ERR
// ------------------------------------

'use strict'

var test = require('ava')

var optionsrc = require('../..')

test('No Config - {Error} - Load Options', function (t) {
  optionsrc().then(function (config) {
    t.is(config.options, {})

    t.is(config.file, '')
  })
})
