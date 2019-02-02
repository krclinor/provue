import Vue from 'vue'
import Vueulidate from "vuelidate"
import App from './App.vue'

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"

import store from "./store"
import router from "./router"

Vue.filter("currency", (value) => 
	new Intl.NumberFormat("ko-KR", {style: "currency", currency: "KRW"}).format(value))

Vue.use(Vueulidate)

new Vue({
	render: h => h(App),
	store,
	router
}).$mount('#app')
