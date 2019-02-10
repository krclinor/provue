<template>
	<div class="m-2">
		<div class="text-center m-2">
			<div class="btn-group">
				<router-link to="/display" tag="button"
					exact-active-class="btn-warning"
					class="btn btn-secondary">
					Simple Display
				</router-link>
				<router-link to="/list" tag="button"
					exact-active-class="btn-info"
					class="btn btn-secondary">
					List Maker
				</router-link>
				<router-link to="/numbers" tag="button"
					exact-active-class="btn-success"
					class="btn btn-secondary">
					Numbers
				</router-link>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
export default {
	name: 'App'
}
</script>
