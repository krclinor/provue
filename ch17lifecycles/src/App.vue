<template>
	<div class="bg-primary text-white m-2 p-2">
		<div class="form-check">
			<input type="checkbox" class="form-check-input"
				v-model="checked" />
			<label>Checkbox</label>
		</div>
		Checked Value: {{checked}}
		<h3>mount phase</h3>
		<div class="bg-info p-2">
			Names:
			<ul>
				<li v-for="name in names" :key="name">
					{{name}}
				</li>
			</ul>
		</div>
		<div class="text-white center my-2">
			<button class="btn btn-light"
				@click="doChange">
				Change
			</button>
		</div>
		<p></p>
		<h3>destroy phase</h3>
		<div class="bg-info p-2" v-if="checked">
			<message-display />
		</div>
		<p></p>
		<h3>errorCaptured</h3>
		<div class="bg-danger text-white text-center h3 p-2"
			v-if="error.occurred">
			An Error Has Occurred
			<h4>
				Error: "{{error.error}}" ({{error.source}})
			</h4>
		</div>
		<div class="bg-primary text-white m-2 p-2"
			v-else>
			<div class="bg-info p-2" v-if="checked">
				<message-display2 />
			</div>
		</div>
	</div>
</template>

<script>
import Vue from "vue"
import MessageDisplay from "./components/MessageDisplay"
import MessageDisplay2 from "./components/MessageDisplay2"

export default {
	name : 'App',
	components:{MessageDisplay, MessageDisplay2},
	data(){
		return {
			checked: true,
			names: [],
			error:{
				occurred: false,
				error: "",
				source:""
			}
		}
	},
	// creation phase
	beforeCreate(){
		console.log("1-1. beforeCreate method called checked: " + this.checked)
	},
	created(){
		console.log("1-2. created method called checked: " + this.checked)
	},
	// mount phase
	mounted(){
		console.log("2-1. mounted method called")
		this.$el.dataset.names.split(",")
			.forEach(name => this.names.push(name))
	},
	// update phase
	beforeUpdate(){
		console.log(`4-1. beforeUpdate called. checked: ${this.checked}`
			+ ` Name: ${this.names[0]} List Elements:`
			+ this.$el.getElementsByTagName("li").length)
	},
	updated(){
		console.log(`4-2. updated called. checked: ${this.checked}`
			+ ` Name: ${this.names[0]} List Elements:`
			+ this.$el.getElementsByTagName("li").length)
	},
	methods:{
		doChange(){
			console.log('doChange called')
			this.checked = !this.checked
			this.names.reverse()
			// nextTick
			Vue.nextTick(() => console.log("Callback Invoked"))
		}
	},
	// watchers
	watch:{
		checked: function(newValue, oldValue){
			console.log(`3-1. Checked Watch, Old: ${oldValue}, New: ${newValue}`)
		}
	},

	errorCaptured(error, component, source){
		console.log(`5 errorCaptured occurred \n ${error} \n ${component}\n ${source}`)
		this.error.occurred = true
		this.error.error = error
		this.error.source = source
		return false
	}
}
</script>

