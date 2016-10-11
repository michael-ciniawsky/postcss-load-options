module.exports = (ctx) => {
  return {
    parser: 'sugarss',
    syntax: 'postcss-scss',
    map: ctx.env === 'development' ? ctx.map : false,
    from: './fixtures/index.css',
    to: './expect/index.css'
  }
}
