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
			<!-- router-view에 transition 적용 -->
			<!-- <transition enter-active-class="animated fadeIn"
				leave-active-class="animated fadeOut" mode="out-in">
				<router-view></router-view>
			</transition> -->

			<!-- 초기화면에서도 적용하기 위해 appear 사용 -->
			<!-- <transition enter-active-class="animated fadeIn"
				leave-active-class="animated fadeOut" mode="out-in"
				appear appear-active-class="animated zoomIn">
				<router-view></router-view>
			</transition> -->

			<!-- 빠른 처리를 위한 quick 클래스 추가  하단 style에서 시간 지정함-->
			<transition enter-active-class="animated fadeIn quick"
				leave-active-class="animated fadeOut quick" mode="out-in"
				appear appear-active-class="animated zoomIn quick">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>
<script>
export default {
	name: 'App'
}
</script>
<style>
.quick {animation-duration: 250ms}
</style>