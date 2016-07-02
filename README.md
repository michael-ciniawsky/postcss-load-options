[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Tests][travis]][travis-url]
[![Coverage][cover]][cover-url]
[![Standard Code Style][style]][style-url]

<div align="center">
  <a href="https://github.com/postcss/postcss">
    <img width="108" height="108" title="PostCSS"           src="http://postcss.github.io/postcss/logo.svg" hspace="20">
  </a>
  <h1>Load Options</h1>
  <p>Autoload Options for PostCSS<p>
</div>

## Install

```bash
npm i -D postcss-load-options
```

## Options
#### package.json

```json
{
 "dependencies": {
   "sugarss": "^0.1.4"
 },
 "postcss": {
   "parser": "sugarss",
   "from": "app.sss",
   "map": "inline",
   "to": "app.css"
  }
}
```

#### postcss.config.js

```js
module.exports = {
  parser: "sugarss",
  from: 'app.sss',
  map: 'inline',
  to: 'app.css'
}
```
#### postcssrc.json

```json
{
  "parser": "sugarss",
  "from": "app.sss",
  "map": "inline",
  "to": "app.css"
}
```

## Usage
#### Default

```js
'use strict'

const { readFileSync } = require('fs')

const postcss = require('postcss')
const optionsrc = require('postcss-load-options')()

const css =  readFileSync('./index.css', 'utf8')

optionsrc.then((options) => {
  postcss([])
    .process(css, options)
    .then(result => console.log(result.css))
}))
```

#### Custom

```js
'use strict'

const { readFileSync } = require('fs')

const postcss = require('postcss')
const optionsrc = require('postcss-load-options')('./path/to/postcssrc.json')

const css = readFileSync('./index.css', 'utf8')

optionsrc.then((options) => {
  postcss([])
    .process(css, options)
    .then(result => console.log(result.css))
}))
```

## LICENSE

> License (MIT)

> Copyright (c) 2016 Michael Ciniawsky

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[npm]: https://img.shields.io/npm/v/postcss-load-options.svg
[npm-url]: https://npmjs.com/package/postcss-load-options

[deps]: https://david-dm.org/michael-ciniawsky/postcss-load-options.svg
[deps-url]: https://david-dm.org/michael-ciniawsky/postcss-load-options

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[travis]: http://img.shields.io/travis/michael-ciniawsky/postcss-load-options.svg
[travis-url]: https://travis-ci.org/michael-ciniawsky/postcss-load-options

[cover]: https://coveralls.io/repos/github/michael-ciniawsky/postcss-load-options/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/michael-ciniawsky/postcss-load-options?branch=master
