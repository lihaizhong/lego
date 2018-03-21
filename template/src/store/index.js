import Vue from 'vue'
import Vuex from 'vuex'
import stores from './stores'

Vue.use(vuex)

// 在开发环境使用严格模式，保证缓存数据库的数据可靠性
if (process.env.NODE_ENV !== 'production') {
  stores.strict = true
}

export default new Vuex.Store(stores)
