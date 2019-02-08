<template>
	<div class="bg-dark text-light text-center p-2">
		<div>
			Counter Value: {{counter}}
		</div>
		<button class="btn btn-secondary"
			@click="handleClick">
			Increment
		</button>
	</div>
</template>
<script>
export default {
	data(){
		return {
			counter: 0,
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
			this.counter++
		}
	}
}
</script>