<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col m-2">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script>

export default {
	name: "App",
	created(){
		this.$store.dispatch("getProductsAction")
	}	
}
</script>

