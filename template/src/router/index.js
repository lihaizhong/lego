import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  routes
})

// Vue实例
const app = router.app
// Vuex实例
const store = app.$options.store

router.beforeEach((to, from, next) => {
  if (from.name !== to.name) {
    // 页面加载遮罩层及页面跳转全局逻辑
  }

  next()
})

router.afterEach(() => {
  // 防止返回时，加载还没开启，就执行完关闭的操作
  app.$nextTick(() => {
    // 页面加载完成关闭遮罩层
  })
})

export default router
