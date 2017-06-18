// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import humps from 'humps'
import App from './App'
import router from './router'
import store from './store'

Vue.use(VueResource).use(Vuex)

Vue.config.productionTip = false

Vue.http.options.xhr = { withCredentials: true }
Vue.http.options.emulateJSON = true

Vue.http.interceptors.push((request, next) => {
  next(response => {
    response.body = humps.camelizeKeys(response.body)
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
