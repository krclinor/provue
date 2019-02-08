<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-8 m-3">
				<product-display/>
			</div>
			<div class="col m-3">
				<prorudt-editor/>
			</div>
		</div>
		<div class="text-right m-2">
			<button class="btn btn-primary"
				@click="toggleColors">
				Toggle Colors
			</button>
		</div>
	</div>
</template>
<script>
import ProductDisplay from "./components/ProductDisplay"
import ProrudtEditor from "./components/ProductEditor"

export default {
	name: 'App',
	components:{ProductDisplay, ProrudtEditor},
	data(){
		return {
			reactiveColors: {
				bg: "bg-secondary",
				text: "text-white"
			}
		}
	},
	// 의존성 주입용 제공자
	// 자신 및 하위 컴포넌트에서 사용가능
	provide(){
		return {
			// colors: {
			// 	bg: "bg-secondary",
			// 	text: "text-white"
			// }
			colors: this.reactiveColors,
			labelFormatter: (value) => `Enter ${value}`
		}
	},
	methods:{
		toggleColors(){
			if(this.reactiveColors.bg == "bg-secondary"){
				this.reactiveColors.bg = "bg-light"
				this.reactiveColors.text = "text-danger"
			}else{
				this.reactiveColors.bg = "bg-secondary"
				this.reactiveColors.text = "text-white"
			}
		}
	}
	
}
</script>