<template>
	<div class="mx-5 p-2 border border-dark">
		<h3 class="bg-success text-white text-center p-2">
			Numbers
		</h3>
		<div class="container-fluid">
			<div class="row">
				<div class="col">
					<input type="number" class="form-control"
						v-model.number="first"
						v-colorize:bg-info.bg="first > 45">
				</div>
				<div class="col-1 h3">+</div>
				<div class="col">
					<input type="number" class="form-control"
						v-model.number="second"
						v-colorize:bg-info="second > 30">
				</div>
				<div v-colorize.bg.text="total > 50" class="col h3">= {{total |currency}}</div>
			</div>
		</div>
	</div>
</template>
<script>
// import Colorize from "../directives/colorize"
import mixin from "../mixins/numbersMixin"
import Vue from "vue"

export default {
	// data(){
	// 	return {
	// 		first: 50,
	// 		second: 20
	// 	}
	// },
	computed:{
		total(){
			// return this.first + this.second

			// plugin을 이용한 계산
			return Vue.sumValues(this.first, this.second)
		}
	},
	// 컴포넌트에 디렉티브 등록 방법
	// directives: {Colorize}

	// mixin 처리
	mixins: [mixin]
}
</script>
