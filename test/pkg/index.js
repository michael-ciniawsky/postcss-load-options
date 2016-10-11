// ------------------------------------
// #POSTCSS - LOAD OPTIONS - TEST - PKG
// ------------------------------------

'use strict'

const test = require('ava')

const read = require('fs').readFileSync
const join = require('path').join

const fixture = (file) => read(join(__dirname, 'fixtures', file))

const expect = (file) => read(join(__dirname, 'expect', file))

const postcss = require('postcss')
const optionsrc = require('../..')

test('package.json - {Object} - Load Options', (t) => {
  optionsrc().then((options) => {
    t.is(options.parser, require('sugarss'))
    t.is(options.syntax, require('postcss-scss'))
    t.is(options.map, false)
    t.is(options.from, './fixtures/index.css')
    t.is(options.to, './expect/index.css')
  })
})

test('package.json - {Object} - Process SSS', (t) => {
  optionsrc().then(function (options) {
    postcss([])
      .process(fixture('index.sss'), options)
      .then(function (result) {
        t.is(expect('index.css'), result.css)
      })
  })
})

test('package.json - {Object} - Process CSS', (t) => {
  optionsrc().then((options) => {
    postcss([])
      .process(fixture('index.css'), options)
      .then((result) => {
        t.is(expect('index.css'), result.css)
      })
  })
})
