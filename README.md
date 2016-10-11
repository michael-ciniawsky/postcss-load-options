[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![coverage][cover]][cover-url]
[![code style][style]][style-url]
[![chat][chat]][chat-url]

<div align="center">
  <img width="100" height="100" title="Load Options"
    src="https://michael-ciniawsky.github.io/postcss-load-options/logo.svg"
  <a href="https://github.com/postcss/postcss">
    <img width="110" height="110" title="PostCSS"           src="http://postcss.github.io/postcss/logo.svg" hspace="10">
  </a>
  <h1>Load Options</h1>
  <p>Autoload Options for PostCSS<p>
</div>

<h2 align="center">Install</h2>

```bash
npm i -D postcss-load-options
```

<h2 align="center">Options</h2>

### `package.json`

```json
{
 "dependencies": {
   "sugarss": "^0.1.4"
 },
 "postcss": {
   "parser": "sugarss",
   "map": false,
   "from": "src/app.sss",
   "to": "dest/app.css"
  }
}
```

### `.postcssrc`

```json
{
  "parser": "sugarss",
  "map": false,
  "from": "src/app.sss",
  "to": "dest/app.css"
}
```

### `postcss.config.js`

```js
module.exports = (ctx) => {
  parser: ctx.parser || 'sugarss',
  map: ctx.env === 'development' ? ctx.map || 'false',
  from: ctx.from || 'src/app.sss',
  to: ctx.to || 'dest/app.css'
}
```

<h2 align="center">Usage</h2>

```js
const { readFileSync } = require('fs')

const postcss = require('postcss')
const optionsrc = require('postcss-load-options')

const sss =  readFileSync('index.sss', 'utf8')

const ctx = { map: 'inline' }

optionsrc(ctx).then((options) => {
  postcss()
    .process(sss, options)
    .then(({ css }) => console.log(css))
}))
```

<h2 align="center">Maintainers</h2>

<table>
  <tbody>
   <tr>
    <td align="center">
      <img width="150 height="150"
      src="https://avatars.githubusercontent.com/u/5419992?v=3&s=150">
      <br />
      <a href="https://github.com/michael-ciniawsky">Michael Ciniawsky</a>
    </td>
  </tr>
  <tbody>
</table>


[npm]: https://img.shields.io/npm/v/postcss-load-options.svg
[npm-url]: https://npmjs.com/package/postcss-load-options

[node]: https://img.shields.io/node/v/postcss-load-options.svg
[node-url]: https://nodejs.org/

[deps]: https://david-dm.org/michael-ciniawsky/postcss-load-options.svg
[deps-url]: https://david-dm.org/michael-ciniawsky/postcss-load-options

[tests]: http://img.shields.io/travis/michael-ciniawsky/postcss-load-options.svg
[tests-url]: https://travis-ci.org/michael-ciniawsky/postcss-load-options

[cover]: https://coveralls.io/repos/github/michael-ciniawsky/postcss-load-options/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/michael-ciniawsky/postcss-load-options?branch=master

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[chat]: https://img.shields.io/gitter/room/postcss/postcss.svg?maxAge=2592000
[chat-url]: https://gitter.im/postcss/postcss
