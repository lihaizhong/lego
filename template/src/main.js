// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axiosConfig from './service'

import 'reset-css/_reset.scss'

Vue.config.productionTip = false

axiosConfig()

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
