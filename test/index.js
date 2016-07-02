// ------------------------------------
// #POSTCSS - LOAD OPTIONS - TEST
// ------------------------------------

'use strict'

const test = require('ava')

const { join } = require('path')
const { readFileSync, writeFileSync } = require('fs')

const fixtures = (file) => readFileSync(join(__dirname, 'fixtures', file))
const expected = (file) => readFileSync(join(__dirname, 'expects', file))

const postcss = require('postcss')
const optionsrc = require('../')

test('1 - Process SSS with default options', (t) => {
  optionsrc().then((options) => {
    postcss([])
      .process(fixtures('index.sss'), options)
      .then(result => {
        writeFileSync('./expects/index.sss.css', result.css)
        t.is(expected('./expect/index.sss.css'), result.css)
      })
  })
})

test('2 - Process SCSS with custom options', (t) => {
  optionsrc('postcssrc.json').then((options) => {
    postcss([])
      .process(fixtures('index.scss'), options)
      .then(result => {
        writeFileSync('./expects/index.scss.css', result.css)
        t.is(expected('index.scss.css'), result.css)
      })
  })
})

test('3 - Process LESS with custom options', (t) => {
  optionsrc('postcss.config.js').then((options) => {
    postcss([])
      .process(fixtures('index.less'), options)
      .then(result => {
        writeFileSync('./expects/index.less.css', result.css)
        t.is(expected('index.less.css'))
      })
  })
})

test.skip('4 - Process CSS-in-JS with custom options', (t) => {
  optionsrc('postcss.custom.js').then((options) => {
    postcss([])
      .process(fixtures('index.js'), options)
      .then(result => {
        writeFileSync('./expects/index.js.css', result.css)
        t.is(expected('index.js.css'))
      })
  })
})
