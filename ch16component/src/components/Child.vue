<template>
	<div class="bg-primary text-white text-center m-2 p-3 h6">
		{{message}}
		<div class="form-group m-1">
			<input class="form-control"
				v-model="message">
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			message: "This is the child component"
		}
	}
}
</script>
