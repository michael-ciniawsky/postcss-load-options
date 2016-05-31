// ------------------------------------
// #POSTCSS - LOAD OPTIONS - TEST
// ------------------------------------

'use strict'

const test = require('ava')

const postcss = require('postcss')
const optionsrc = require('../index')

const { readFileSync, writeFileSync } = require('fs')

function readSync (path) {
  return readFileSync(path, 'utf8')
}

function writeSync (path, file) {
  return writeFileSync(path, file, 'utf8')
}

test('Process SSS with default options', (t) => {
  optionsrc().then((options) => {
    postcss([])
      .process(readSync('./fixtures/index.sss'), options)
      .then(result => {
        writeSync('./expect/index.sss.css', result.css)
        t.equal(result.css, readSync('./expect/index.sss.css'))
        writeSync('./results/index.sss.css', result.css)
      })
  })
})

test('Process SCSS with custom options', (t) => {
  optionsrc('postcssrc.json').then((options) => {
    postcss([])
      .process(readSync('./fixtures/index.scss'), options)
      .then(result => {
        writeSync('./expect/index.scss.css', result.css)
        t.equal(result.css, readSync('./expect/index.scss.css'))
        writeSync('./results/index.scss.css', result.css)
      })
  })
})

test('Process LESS with custom options', (t) => {
  optionsrc('postcss.config.js').then((options) => {
    postcss([])
      .process(readSync('./fixtures/index.less'), options)
      .then(result => {
        writeSync('./expect/index.less.css', result.css)
        t.equal(result.css, readSync('./expect/index.less.css'))
        writeSync('./results/index.less.css', result.css)
      })
  })
})

// test('Process CSS-in-JS with custom options', (t) => {
//   optionsrc('postcss.custom.js').then((options) => {
//     postcss([])
//       .process(readSync('./fixtures/index.js'), options)
//       .then(result => {
//         writeSync('./expect/index.js.css', result.css)
//         t.equal(result.css, readSync('./expect/index.js.css'))
//         writeSync('./results/index.js.css', result.css)
//       })
//   })
// })
