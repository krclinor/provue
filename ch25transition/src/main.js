import Vue from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "animate.css/animate.min.css"
import "popmotion/dist/popmotion.global.min.js"

import router from "./router"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
