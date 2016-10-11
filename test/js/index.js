// ------------------------------------
// #POSTCSS - LOAD OPTIONS - TEST - JS
// ------------------------------------

'use strict'

const test = require('ava')

const read = require('fs').readFileSync
const join = require('path').join

const fixture = (file) => read(join(__dirname, 'fixtures', file))

const expect = (file) => read(join(__dirname, 'expect', file))

const postcss = require('postcss')
const optionsrc = require('../..')

test('postcss.config.js - {Function} - Load Options', function (t) {
  const ctx = { map: 'inline' }

  optionsrc(ctx).then((options) => {
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
      .then((result) => {
        t.is(expect('index.css'), result.css)
      })
  })
})

test('postcss.config.js - {Function} - Process CSS', (t) => {
  optionsrc().then((options) => {
    postcss([])
      .process(fixture('index.css'), options)
      .then((result) => {
        t.is(expect('index.css'), result.css)
      })
  })
})
