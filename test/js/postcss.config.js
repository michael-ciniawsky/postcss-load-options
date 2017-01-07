module.exports = function (ctx) {
  return {
    parser: 'sugarss',
    syntax: 'postcss-scss',
    stringifier: 'midas',
    map: ctx.env === 'development' ? ctx.map : false,
    from: './test/js/fixtures/index.css',
    to: './test/js/expect/index.css',
    plugins: {}
  }
}
