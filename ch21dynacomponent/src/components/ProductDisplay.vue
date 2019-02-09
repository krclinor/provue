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
			this.selectComponent("editor")
		},
		createNew(){
			this.selectProduct()
			this.selectComponent("editor")
		}
	},
	created(){
		this.setEditButtonColor(false)
		this.setDeleteButtonColor(false)
	}
}
</script>
