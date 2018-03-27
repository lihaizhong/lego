const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const serve = require('koa-static')
const session = require('koa-session')
const responseTime = require('koa-response-time')
const onerror = require('koa-onerror')
const qs = require('koa-qs')

const config = require('./config')
const router = require('./router')

const app = new Koa()

// 一天
const oneday = 86400000

// 错误捕获机制
onerror(app)
// 友好的get参数处理
qs(app, 'first')
// 设置返回时间
app.use(responseTime())
// 解析post请求数据
app.use(bodyParser())
// 静态资源服务器
app.use(serve(config.staticPath, {
  maxage: 30 * oneday // 浏览器缓存30天
}))
// 服务器session机制
app.use(session({
  maxAge: 7 * oneday
}, app))

// 路由机制
app.use(router.routes())
  .use(router.allowedMethods())

// 启动服务器
app.listen(config.port, (err) => {
  if (err) {
    throw err
  }

  console.log(`${ config.name }服务器已启动，端口号为 ${ config.port }`)
})
