<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col text-center m-2">
				<!-- <router-link to="/list" class="m-1">List</router-link>
				<router-link to="/create" class="m-1">Create</router-link> -->

				<!-- tag -->
				<!-- <ol>
					<router-link to="/list" tag="li">List</router-link>
					<router-link to="/create" tag="li">Create</router-link>
				</ol> -->
				<!-- event -->
				<!-- <ol>
					<router-link to="/list" tag="li" event="mouseenter">List</router-link>
					<router-link to="/create" tag="li" event="mouseenter">Create</router-link>
				</ol> -->

				<!--style에서 router-link-active, router-link-exact-active 클래스 지정-->
				<!-- <ol>
					<router-link to="/list" tag="li">List</router-link>
					<router-link to="/create" tag="li">Create</router-link>
					<router-link to="/edit" tag="li">Edit</router-link> -->

					<!-- 정확히 일치하는 경우에만 -->
					<!-- <router-link to="/edit" tag="li" exact>Edit</router-link>

					<router-link to="/edit/1" tag="li">Edit Kayak</router-link>
				</ol> -->

				<!-- exact-active-class 지정 -->
				<!-- <div class="btn-group">
					<router-link to="/list" tag="button"
						exact-active-class="btn-info"
						class="btn btn-primary">
						List
					</router-link>
					<router-link to="/create" tag="button"
						exact-active-class="btn-info"
						class="btn btn-primary">
						Create
					</router-link>
					<router-link to="/edit" tag="button"
						exact-active-class="btn-info"
						class="btn btn-primary">
						Edit
					</router-link>
					<router-link to="/edit/1" tag="button"
						exact-active-class="btn-info"
						class="btn btn-primary">
						Edit Kayak
					</router-link>
				</div> -->

				<div class="btn-group">
					<router-link to="/products" tag="button"
						exact-active-class="btn-info"
						class="btn btn-primary">
						Products
					</router-link>
					<router-link to="/preferences" tag="button"
						exact-active-class="btn-info"
						class="btn btn-primary">
						Preferences
					</router-link>

					<router-link to="/named/tableleft" class="btn btn-primary"
						active-class="btn-info">
						Table Left
					</router-link>
					<router-link to="/named/tableright" class="btn btn-primary"
						active-class="btn-info">
						Table Right
					</router-link>
					<router-link to="/filter/All" class="btn btn-primary"
						active-class="btn-info">
						Filtered Data
					</router-link>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col m-2">
				<h3 class="bg-warning text-white text-center p-2"
					v-if="componentLoading">
					Loading Component...
				</h3>
				<router-view v-show="!componentLoading"></router-view>
			</div>
		</div>
	</div>
</template>
<script>
import {mapState} from "vuex"

export default {
	name: "App",
	computed:{
		...mapState(["componentLoading"])
	},
	created(){
		this.$store.dispatch("getProductsAction")
	}	
}
</script>

<style scoped>
	/* router-link엘리먼트에는 스타일적용 안됨 */
	router-link { text-align: right; color:yellow; background-color: red;}

	li { text-align: left; color: blue; background-color: lightblue;}

	/* router-link-active router-link-exact-active*/
	.router-link-active {font-size: xx-large;}
	.router-link-exact-active {font-weight: bolder;}
</style>
