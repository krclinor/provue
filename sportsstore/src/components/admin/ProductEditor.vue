<template>
	<div>
		<h4 class="text-center text-white p-2"
			:class="themeClass">
			{{editMode ? "Edit" : "Create Product"}}
		</h4>
		<h4 class="bg-danger text-white text-center p-2"
			v-if="$v.$invalid && $v.$dirty">
			Values Required for All Fields
		</h4>
		<div class="form-group"
			v-if="editMode">
			<label>ID (Not Editable)</label>
			<input class="form-control" disabled
				v-model="product.id">
		</div>
		<div class="form-group">
			<label>Name</label>
			<input class="form-control"
				v-model="product.name"/>
		</div>
		<div class="form-group">
			<label>Description</label>
			<input class="form-control"
				v-model="product.description"/>
		</div>
		<div class="form-group">
			<label>Category</label>
			<select class="form-control"
				v-model="product.category">
				<option v-for="c in categories" :key="c">{{c}}</option>
			</select>
		</div>
		<div class="form-group">
			<label>Price</label>
			<input class="form-control"
				v-model="product.price"/>
		</div>
		<div class="text-center">
			<router-link class="btn btn-secondary m-1"
				to="/admin/products">
				Cancel
			</router-link>
			<button class="btn m-1"
				:class="themeClassButton"
				@click="handleSave">
				{{editMode ? "Save Changes" : "Store Product"}}
			</button>
		</div>
	</div>
</template>

<script>
import {mapState, mapActions} from "vuex"
import {required} from "vuelidate/lib/validators"

export default {
	data(){
		return {
			product:{}
		}
	},
	computed:{
		...mapState({
			pages: state => state.pages,
			currentPage: state => state.currentPage,
			categories: state => state.categoriesData
		}),
		editMode(){
			return this.$route.params["op"] == "edit"
		},
		themeClass(){
			return this.editMode ? "bg-info" : "bg-primary"
		},
		themeClassButton(){
			return this.editMode ? "btn-info" : "btn-primary"
		}
	},
	validations:{
		product: {
			name : {required},
			description : {required},
			category : {required},
			price : {required}
		}
	},
	methods:{
		...mapActions(["addProduct", "updateProduct"]),
		handleSave(){
			this.$v.$touch()
			if(!this.$v.$invalid){
				if(this.editMode){
					this.updateProduct(this.product)
				}else{
					this.addProduct(this.product)
				}
				this.$router.push("/admin/products")
			}
		}
	},
	created(){
		if(this.editMode){
			Object.assign(this.product,
				this.$store.getters.productById(this.$route.params["id"]))
		}
	}
}
</script>
