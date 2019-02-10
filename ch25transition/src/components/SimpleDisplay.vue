<template>
	<div class="mx-5 border border-dark p-2">
		<h3 class="bg-warning text-white text-center p-2">
			Display
		</h3>
		<!-- <--transition>
			<div class="h4 bg-info text-center p-2"
				v-if="show">
				Hello, Adam
			</div>
		<--/transition> -->

		<!-- animate.css 라이브러리 이용 -->
		<!-- <--transition enter-to-class="fadeIn"
			leave-to-class="fadOut">
			<div class="animated h4 bg-info text-center p-2"
				v-if="show">
				Hello, Adam
			</div>
		<--/transition> -->

		<!-- 동일타입의 여러 엘리먼트에 적용하기 위해서는 구분하기 위해 
			key값을 설정
		 -->
		<transition	enter-active-class="fadeIn"
					leave-active-class="fadOut"	mode="out-in">
			<div class="animated h4 bg-info text-center p-2"
				v-if="show"
				key="hello">
				Hello, Adam
			</div>
			<div v-else class="animated h4 bg-success text-center p-2"
				key="goodbye">
				Goodbye, Adam
			</div>
		</transition>
		<div class="text-center">
			<button class="btn btn-primary"
				@click="toggle">
				Toggle Visibility
			</button>
		</div>
	</div>
</template>

<script>

export default {
	data(){
		return {
			show : true
		}
	},
	methods:{
		toggle(){
			this.show = !this.show
		}
	}
}
</script>
<style>
.v-leave-active{
	opacity: 0;
	font-size: 0em;
	transition: all 1000ms;
}
.v-enter {
	opacity: 0;
	font-size: 0em;
}
.v-enter-to {
	opacity: 1;
	font-size: x-large;
	transition: all 1000ms;
}
/* 
v-enter: 엘리먼트가 DOM에 추가되기 전에 적용되고 DOM에 추가된 프레임 후에 제거
v-enter-active: 엘리먼트가 DOM에 추가되기 전에 적용되고, 트랜지션이 완료되면 제거
v-enter-to: 엘리먼트가 DOM에 추가된 후 적용되고, 트랜지션이 끝나면 제거
v-leave: leave를 위한 시작 상태. 진출 트랜지션이 트리거 될 때 적용되고 
    한 프레임 후에 제거됩니다.
v-leave-active: l진출 트랜지션이 트리거되면 적용되고 트랜지션이 완료되면 제거
v-leave-to: 진출 상태의 끝에서 실행. 진출 트랜지션이 트리거되고 
  (동시에 v-leave가 제거됨), 
  트랜지션/애니메이션이 끝나면 제거되는 하나의 프레임을 추가했습니다. 
*/
</style>