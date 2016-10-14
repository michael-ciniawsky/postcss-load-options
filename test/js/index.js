// ------------------------------------
// #POSTCSS - LOAD OPTIONS - TEST - JS
// ------------------------------------

'use strict'

var test = require('ava')

var read = require('fs').readFileSync
var join = require('path').join

var fixture = function (file) {
  return read(join(__dirname, 'fixtures', file))
}

var expect = function (file) {
  return read(join(__dirname, 'expect', file))
}

var postcss = require('postcss')
var optionsrc = require('../..')

test('postcss.config.js - {Function} - Load Options', function (t) {
  var ctx = { map: 'inline' }

  optionsrc(ctx).then(function (options) {
    t.is(options.parser, require('sugarss'))
    t.is(options.syntax, require('postcss-scss'))
    t.is(options.map, 'inline')
    t.is(options.from, './fixtures/index.css')
    t.is(options.to, './expect/index.css')
  })
})

test('postcss.config.js - {Function} - Process SSS', function (t) {
  optionsrc().then(function (options) {
    postcss([])
      .process(fixture('index.sss'), options)
      .then(function (result) {
        t.is(expect('index.css'), result.css)
      })
  })
})

test('postcss.config.js - {Function} - Process CSS', function (t) {
  optionsrc().then(function (options) {
    postcss([])
      .process(fixture('index.css'), options)
      .then(function (result) {
        t.is(expect('index.css'), result.css)
      })
  })
})
