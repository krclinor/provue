// //// 자바스크립트 버전
// require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

// let counter = 1

// let container = document.createElement("div")
// container.classList.add("text-center", "p-3")

// let msg = document.createElement("h1")
// msg.classList.add("bg-primary", "text-white", "p-3")
// msg.textContent = "Button Not Pressed"

// let button = document.createElement("button")
// button.textContent = "Press Me"
// button.classList.add("btn", "btn-secondary")
// button.onclick = () => msg.textContent = `Button Presses : ${counter++}`

// container.appendChild(msg)
// container.appendChild(button)

// let app = document.getElementById("app")
// app.parentElement.replaceChild(container, app)

//// Vue 버전
import Vue from "vue"

import "bootstrap/dist/css/bootstrap.min.css"

new Vue({
	el: "#app",
	template: `<div class= "text-center p-3">
		<h1 class="bg-secondary text-white p-3">
			{{message}}
		</h1>
		<button class="btn btn-secondary" @click="handleClick">
			Press Me
		</button>
	</div>`,
	data:{
		counter: 0
	},
	methods:{
		handleClick(){
			this.counter++
		}
	},
	computed:{
		message(){
			return this.counter == 0 ?
				"Button Not Pressed" : `Button Presses: ${this.counter}`
		}
	}
})