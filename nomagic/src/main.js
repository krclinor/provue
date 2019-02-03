import Vue from "vue"
import "bootstrap/dist/css/bootstrap.min.css"

import MyComponent from "./App"

new Vue({
	el: "#app",
	components: {"custom": MyComponent},
	template: "<custom/>"
})