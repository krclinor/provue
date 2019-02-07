<template>
	<div class="bg-primary text-white text-center m-2 p-3 h6">
		{{message}}
		<div class="form-group m-1">
			<label>{{labelText}}</label>
			<input class="form-control"
				v-model="message">
		</div>
	</div>
</template>

<script>
export default {
	props:["labelText", "initialValue"],
	data(){
		return {
			message: this.initialValue
		}
	}
}
</script>
