<template>
	<div class="bg-primary text-white text-center m-2 p-3 h6">
		<slot>
			<h4>Use the form fields to edit the data</h4>
		</slot>
		<div class="form-group m-1 text-left">
			<label>Name</label>
			<input class="form-control"
				v-model="product.name" />
		</div>
		<div class="form-group m-1 text-left">
			<label>Category</label>
			<input class="form-control" v-model="product.category">
		</div>
		<div class="form-group m-1 text-left">
			<label>Price</label>
			<input class="form-control" v-model.number="product.price" />
		</div>
		<div class="mt-2">
			<button class="btn btn-info"
				@click="doSubmit">
				Submit
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props:["initialProduct"],
	data(){
		return {
			product: this.initialProduct || {}
		}
	},
	methods:{
		doSubmit(){
			this.$emit("productSubmit", this.product)
		}
	}
}
</script>
