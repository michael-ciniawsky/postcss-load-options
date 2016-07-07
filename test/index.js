// ------------------------------------
// #POSTCSS - LOAD OPTIONS - TEST
// ------------------------------------

'use strict'

const test = require('ava')

const { join } = require('path')
const { readFileSync } = require('fs')

const fixtures = (file) => readFileSync(join(__dirname, 'fixtures', file))
const expected = (file) => readFileSync(join(__dirname, 'expects', file))

const postcss = require('postcss')
const optionsrc = require('..')

test('1 - Load with default options', (t) => {
  optionsrc().then((options) => {
    t.is(expected('options.default.js'), options)
  })
})

test('2 - Load with custom options', (t) => {
  optionsrc('postcss.config.js').then((options) => {
    t.is(expected('options.custom.js'), options)
  })
})

test('3 - Process SSS with default options', (t) => {
  optionsrc().then((options) => {
    postcss([])
      .process(fixtures('index.sss'), options)
      .then((result) => {
        t.is(expected('index.css'), result.css)
      })
  })
})

test('4 - Process SCSS with custom options', (t) => {
  optionsrc('postcss.config.js').then((options) => {
    postcss([])
      .process(fixtures('index.css'), options)
      .then((result) => {
        t.is(expected('custom.css'), result.css)
      })
  })
})
