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
						<!-- <router-link :to="`/edit/${p.id}`" class="btn btn-sm" :class="editClass"> -->
						<!-- 이름 지정방식 -->
						<router-link class="btn btn-sm" 
							:to="{name: 'editor', params: {op: 'edit', id: p.id}}"
							:class="editClass">
							Edit
						</router-link>
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
			<router-link to="/create" class="btn btn-primary">
				Create New
			</router-link>
		</div>
	</div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from "vuex"

export default {
	computed:{
		...mapState(["products"]),
		...mapState({
			useStripedTabl: state => state.prefs.stripedTable
		}),
		...mapGetters(["tableClass", "editClass", "deleteClass"]),
	},
	methods:{
		...mapMutations({
			selectProduct: "selectProduct",
			selectComponent: "nav/selectComponent"
		}),
		...mapActions({
			deleteProduct: "deleteProductAction"
		}),
		...mapMutations(["setEditButtonColor", "setDeleteButtonColor"]),
		editProduct(product){
			this.selectProduct(product)

			// 프로그램으로 경로변경
			this.$router.push("/edit")
			// push(loc(ation) : 해당 경로로 이동
			// replace(location) : 브라우저 경로 history는 변경하지 않고 해당 경로로 이동
			// back() 브라우저 history의 이전경로로 이동
			// forward() 브라우저 history의 다음경로로 이동
		},
		createNew(){
			this.selectProduct()

			// 프로그램으로 경로변경
			this.$router.push("/edit")
		}
	}
}
</script>
