<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col bg-dark text-white">
				<a class="navbar-brand">SPORTS STORE</a>
				<cart-summary/>
			</div>
		</div>
		<div class="row">
			<div class="col-3 bg-info p-2">
				<CategoryControls/>
			</div>
			<div class="col-9 p-2">
				<search/>
				<ProductList/>
			</div>
		</div>
	</div>
</template>

<script>
import ProductList from "./ProductList"
import CategoryControls from "./CategoryControls"
import CartSummary from "./CartSummary"
import {mapMutations} from "vuex"
import Search from "./Search"

export default {
	components:{ProductList, CategoryControls, CartSummary, Search},
	methods:{
		...mapMutations(["setShowSearch"])
	}
}
</script>