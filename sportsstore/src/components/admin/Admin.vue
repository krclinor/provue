<template>
	<div class="contailer-fluid">
		<div class="row">
			<div class="col bg-secondary text-white">
				<a class="navbar-brand">SPORTS STORE Admin</a>
			</div>
		</div>
		<div class="row">
			<div class="col-3 bg-secondary p-2">
				<router-link class="btn btn-block btn-primary"
					to="/admin/products"
					active-class="active">
					Products
				</router-link>
				<router-link class="btn btn-block btn-primary"
					to="/admin/orders"
					active-class="active">
					Orders
				</router-link>
			</div>
			<div class="col-9 p-2">
				<router-view/>
			</div>
		</div>
	</div>
</template>
