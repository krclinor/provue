<template>
	<div>
		<table class="table table-sm table-striped table-bordered">
			<tr>
				<th>ID</th><th>Name</th><th>Category</th><th>Price</th><th></th>
			</tr>
			<tbody>
				<tr v-for="p in products" :key="p.id">
					<td>{{p.id}}</td>
					<td>{{p.name}}</td>
					<td>{{p.category}}</td>
					<td>{{p.price}}</td>
					<td>
						<button class="btn btn-sm btn-primary"
							@click="editProduct(p)">
							Edit
						</button>
						<button class="btn btn-sm btn-danger"
							@click="deleteProduct(p)">
							Delete
						</button>
					</td>
				</tr>
				<tr v-if="products.length == 0">
					<td class="text-center" colspan="5">
						No Data
					</td>
				</tr>
			</tbody>
		</table>
		<div class="text-center">
			<button class="btn btn-primary"
				@click="createNew">
				Create New
			</button>
		</div>
	</div>
</template>

<script>
import Vue from "vue"

// import Axios from "axios"
// const baseUrl = "http://localhost:3500/products/"

export default {
	data(){
		return {
			products: []
		}
	},
	methods:{
		createNew(){
			this.eventBus.$emit("create")
		},
		editProduct(product){
			this.eventBus.$emit("edit", product)
		},
		processProducts(newProducts){
			this.products.splice(0)
			this.products.push(...newProducts)
		},
		async deleteProduct(product){
			await this.restDataSource.deleteProduct(product)
			let index = this.products.findIndex(p => p.id == product.id)
			this.products.splice(index, 1)
		},
		async processComplete(product){
			let index = this.products.findIndex(p => p.id == product.id)
			if(index == -1){
				await this.restDataSource.saveProduct(product)
				this.products.push(product)
			}else{
				await this.restDataSource.updateProduct(product)
				this.products.splice(index, 1, product)
			}
		}
	},
	inject:["eventBus", "restDataSource"],
	// created(){
	// 	Axios.get(baseUrl)
	// 		.then(resp => {
	// 			console.log(`HTTP Repsonse: ${resp.status}, ${resp.statusText}`)
	// 			console.log(`Respoinse Data: ${resp.data.length} items`)
	// 			this.processProducts(resp.data)
	// 		})
	// }
	
	// // 간결한 방식
	// // 익스플로러 에서는 미지원
	// async created(){
	// 	let data = (await Axios.get(baseUrl)).data
	// 	this.processProducts(data)
	// }
	async created(){
		this.processProducts(await this.restDataSource.getProducts())
		this.eventBus.$on("complete", this.processComplete)
	}
}
</script>
