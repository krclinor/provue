<template>
	<div>
		<div class="form-group">
			<label>ID</label>
			<input class="form-control" v-model="product.id" />
		</div>
		<div class="form-group">
			<label>Name</label>
			<input class="form-control" v-model="product.name" />
		</div>
		<div class="form-group">
			<label>Category</label>
			<input class="form-control" v-model="product.category" />
		</div>
		<div class="form-group">
			<label>Price</label>
			<input class="form-control" v-model.number="product.price" />
		</div>
		<div class="text-center">
			<button class="btn btn-primary"
				@click="save">
				{{editing ? "Save" : "Create"}}
			</button>
			<button class="btn btn-secondary"
				@click="cancel">
				Cancel
			</button>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			editing: false,
			product: {}
		}
	},
	methods:{
		save(){
			// this.$store.commit("saveProduct", this.product)
			this.$store.dispatch("saveProductAction", this.product)
			this.product = {}
		},
		cancel(){
			this.$store.commit("selectProduct")
		}
	},
	created(){
		// store의 selectedProduct값 변경 감시를 위한 watcher 설정
		this.$store.watch(state => state.selectedProduct,
			(newValue, oldValue) => {
				if(newValue == null){
					this.editing = false
					this.product = {}
				}else{
					this.editing = true
					this.product = {}
					Object.assign(this.product, newValue)
				}
			})
	}
}
</script>
