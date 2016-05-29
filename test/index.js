'use strict'

const fs = require('fs')

const postcss = require('postcss')
const options = require('../index')()

const css = fs.readFileSync('./fixtures/index.css', 'utf8')

console.log(options)

// postcss([])
//   .process(css, options)
//   .then(result => console.log(result.css))
