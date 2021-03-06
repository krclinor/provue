import Vue from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"

Vue.config.productionTip = false
new Vue({
	render: h => h(App),

	//   이벤트 버스 정의
	provide() {
		return {
			eventBus: new Vue()
		}
	}

}).$mount('#app')