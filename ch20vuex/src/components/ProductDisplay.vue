<template>
	<div>
		<table class="table table-sm table-bordered" :class="'table-striped' == useStripedTabl">
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
						<button class="btn btn-sm"
							:class="editClass"
							@click="editProduct(p)">
							Edit
						</button>
						<button class="btn btn-sm"
							:class="deleteClass"
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
import {mapState, mapMutations, mapActions, mapGetters} from "vuex"

export default {
	// data(){
	// 	return {
	// 		products: []
	// 	}
	// },
	computed:{
		// products(){
		// 	return this.$store.state.products

		// 	// // store의 getter호출 
		// 	// return this.$store.getters.filteredProducts


		// 	// // getter에 추가 매개변수포함한 호출
		// 	// return this.$store.getters.filteredProducts(175)
		// }

		// 위 메서드와 동일
		// 루트 state의 프로퍼티를 computed에 매핑
		...mapState(["products"]),

		// vuex모듈의 state매핑은 모듈명을 명시해야 함.
		...mapState({
			useStripedTabl: state => state.prefs.stripedTable
		}),
		// vuex모듈 getter매핑은 vuex root모듈과 동일하게 처리
		...mapGetters(["tableClass", "editClass", "deleteClass"]),
		// //모듈에 namespaced를 true로 한 경우
		// ...mapGetters({
		// 	tableClass: "prefs/tableClass",
		// 	editClass: "prefs/editClass",
		// 	deleteClass: "prefs/deleteClass"
		// })

	},
	methods:{
		// createNew(){
		// 	this.$store.commit("selectProduct")
		// },
		// editProduct(product){
		// 	this.$store.commit("selectProduct", product)
		// },

		// 위 2개 메서드와 동일
		// mutation을 메서드로 매핑
		...mapMutations({
			editProduct: "selectProduct",
			createNew: "selectProduct"
		}),
		// deleteProduct(product){
		// 	this.$store.commit("deleteProduct", product)
		// },

		// Action을 메서드에 매핑
		...mapActions({
			getProducts: "getProductsAction",
			deleteProduct: "deleteProductAction"
		}),
		// vuex 모듈 매핑도 root모듈 매핑처럼 동일하게 처리
		...mapMutations(["setEditButtonColor", "setDeleteButtonColor"]),
		// //모듈에 namespaced를 true로 한 경우
		// ...mapMutations({
		// 	setEditButtonColor: "prefs/setEditButtonColor",
		// 	setDeleteButtonColor: "prefs/setDeleteButtonColor"
		// })
	},
	created(){
		// this.$store.dispatch("getProductsAction")
		this.getProducts()
		
		this.setEditButtonColor(false)
		this.setDeleteButtonColor(false)
	}
}
</script>
