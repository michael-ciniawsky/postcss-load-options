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
  fs.readFileSync(path.join(__dirname, 'expect', file))
}

var postcss = require('postcss')
var optionsrc = require('..')

test('Load Options', function (t) {
  optionsrc().then(function (options) {
    t.is(options.parser, require('sugarss'))
    t.is(options.map, false)
    t.is(options.from, './fixtures/index.css')
    t.is(options.to, './expect/index.css')
  })
})

test('Load Options with Context', function (t) {
  var ctx = { env: 'dev', map: 'inline' }

  optionsrc(ctx).then(function (options) {
    t.is(options.parser, require('sugarss'))
    t.is(options.map, 'inline')
    t.is(options.from, './fixtures/index.css')
    t.is(options.to, './expect/index.css')
  })
})

test('Process SSS', function (t) {
  optionsrc().then(function (options) {
    postcss([])
      .process(fixtures('index.sss'), options)
      .then(function (result) {
        t.is(expected('index.css'), result.css)
      })
  })
})

test('Process CSS', function (t) {
  // var ctx = { parser: null }

  optionsrc().then(function (options) {
    postcss([])
      .process(fixtures('index.css'), options)
      .then(function (result) {
        t.is(expected('index.css'), result.css)
      })
  })
})
