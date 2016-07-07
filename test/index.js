// ------------------------------------
// #POSTCSS - LOAD OPTIONS - TEST
// ------------------------------------

'use strict'

var test = require('ava')

var fs = require('fs')
var path = require('path')

function fixtures (file) {
  fs.readFileSync(path.join(__dirname, 'fixtures', file))
}

function expected (file) {
  fs.readFileSync(path.join(__dirname, 'expects', file))
}

var postcss = require('postcss')
var optionsrc = require('..')

test('1 - Load with default options', function (t) {
  optionsrc().then(function (options) {
    t.is(expected('options.default.js'), options)
  })
})

test('2 - Load with custom options', function (t) {
  optionsrc('postcss.config.js').then(function (options) {
    t.is(expected('options.custom.js'), options)
  })
})

test('3 - Process SSS with default options', function (t) {
  optionsrc().then(function (options) {
    postcss([])
      .process(fixtures('index.sss'), options)
      .then(function (result) {
        t.is(expected('index.css'), result.css)
      })
  })
})

test('4 - Process SCSS with custom options', function (t) {
  optionsrc('postcss.config.js').then(function (options) {
    postcss([])
      .process(fixtures('index.css'), options)
      .then(function (result) {
        t.is(expected('custom.css'), result.css)
      })
  })
})
