import Vue from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"

// 커스텀 디렉티브 전역 등록 방법
import Colorize from "./directives/colorize"
Vue.directive("colorize", Colorize)

// mixin 전역등록
import mixin from "./mixins/numbersMixin" 
Vue.mixin(mixin)

// plugin 전역등록
import MathsPlugin from "./plugins/maths"
Vue.use(MathsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
