<template>
	<div>
		<table class="table table-sm table-striped table-bordered">
			<tr>
				<th>ID</th><th>Name</th><th>Price</th><th></th>
			</tr>
			<tbody>
				<tr v-for="p in products" :key="p.id">
					<td>{{p.id}}</td>
					<td>{{p.name}}</td>
					<td>{{p.price | currency}}</td>
					<td>
						<button class="btn btn-sm btn-primary"
							@click="editProduct(p)">
							Edit
						</button>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="text-center">
			<button class="btn btn-primary" @click="createNew">
				Create New
			</button>
		</div>
	</div>
</template>

<script>
import Vue from "vue"

export default {
	data(){
		return {
			products:[
				{id: 1, name: "Kayak", price: 275},
				{id: 2, name: "Lifejacket", price: 48.95},
				{id: 3, name: "Soccer Ball", price: 19.50},
				{id: 4, name: "Corner Flags", price: 39.95},
				{id: 5, name: "Stadium", price: 79500},
			]
		}
	},
	filters:{
		currency(value){
			return `$${value.toFixed(2)}`
		}
	},
	methods:{
		createNew(){
			// 이벤트 버스 호출
			this.eventBus.$emit("create")
		},
		editProduct(product){
			//debugger
			// 이벤트 버스 호출
			this.eventBus.$emit("edit", product)
		},
		processComplete(product){
			let index = this.products.findIndex(p => p.id == product.id)
			if(index == -1){
				this.products.push(product)
			}else{
				Vue.set(this.products, index, product)
			}
		}
	},
	// 이벤트버스 사용을 위한 의존성 주입
	// main.js에서 정의 
	inject: ["eventBus"],
	created(){
		// 이벤트버스 이벤트 처리기 등록
		this.eventBus.$on("complete", this.processComplete)
	}
}
</script>
