module.exports = (ctx) => {
  return {
    parser: 'sugarss',
    map: ctx.env === 'dev' ? ctx.map : false,
    from: './fixtures/index.css',
    to: './expect/index.css'
  }
}
