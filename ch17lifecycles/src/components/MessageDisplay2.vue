<template>
	<div class="bg-dark text-light text-center p-2">
		<div>
			Counter Value: {{counter}}
		</div>
		<button class="btn btn-secondary"
			@click="handleClick">
			Increment
		</button>
		<button class="btn btn-secondary" 
			@click="generateError">
			Generate Error
		</button>
	</div>
</template>
<script>
export default {
	data(){
		return {
			// counter: 0,
			counter_base : 0,
			generate_error: false
		}
	},
	created(){
		console.log("Comp 1: created")
	},
	beforeDestroy(){
		console.log("Comp 2: beforeDestroy")
	},
	destroyed(){
		console.log("Comp 3: destroyed")
	},
	methods:{
		handleClick(){
			console.log("Comp: handleClick")
			// this.counter++
			this.counter_base++
		},
		generateError(){
			this.generate_error = true
		}
	},
	computed:{
		counter(){
			if(this.generate_error){
				throw "My Component Error"
			}else{
				return this.counter_base
			}
		}
	}
}
</script>