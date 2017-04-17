// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueTouch from 'vue-touch'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
sync(store, router)
// Vue.use(VueTouch, {name: 'v-touch'})
/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  ...App
})

export { app, router, store }
