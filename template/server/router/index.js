const Router = require('koa-router')

const router = new Router({
  prefix: '/api'
})

// router.use(xxxRouter.routes(), xxxRouter.allowedMethods())
// xxxRouter创建时，必须配置prefix

module.exports = router
