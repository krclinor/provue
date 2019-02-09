<template>
	<div class="container-fluid">
		<!-- <div class="row">
			<div class="col text-center m-2">
				<div class="btn-group btn-group-toggle">
					<label class="btn btn-info"
						:class="{active: (selected == 'table')}">
						<input type="radio" v-model="selected" value="table" />
						Table
					</label>
					<label class="btn btn-info"
						:class="{active: (selected == 'editor')}">
						<input type="radio" v-model="selected" value="editor">
						Editor
					</label>
				</div>
			</div>
		</div> -->
		<div class="row">
			<div class="col-text-center m-2">
				<button class="btn btn-primary"
					@click="selectComponent('table')">
					Standard Features
				</button>
				<button class="btn btn-success"
					@click="selectComponent('summary')">
					Advanced Features
				</button>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<!-- keep-alive를 사용하면 컴포넌트가 변경되는 경우 
					이전 컴포넌트가 제거(destroy)되지 않고 비활성화(deactive)된다.
					대신 자원낭비가 발생할 수 있다. -->
				<!-- 
				<keep-alive>
					<component :is="selectedComponent"></component>
				</keep-alive> 
				-->
				<component :is="selectedComponent"></component>
			</div>
		</div>
	</div>
</template>
<script>
import {mapState, mapMutations} from "vuex"
import ProductDisplay from "./components/ProductDisplay"
import ProductEditor from "./components/ProductEditor"
import ErrorDisplay from "./components/ErrorDisplay"
import LoadingMessage from "./components/LoadingMessage"

// lazy loading
// const DataSummary = () => import("./components/DataSummary")

// 좀더 세부적으로 설정
const DataSummary = () => ({
	// lazy loading 컴포넌트의 자바스크립트 파일명을 지정하기 위해
	// webpackChunkName 코멘트 사용
	component: import(/* webpackChunkName: "advanced" */ "./components/DataSummary"),
	loading: LoadingMessage,
	delay: 1000
})

export default {
	name: "App",
	components: {ProductDisplay, ProductEditor, ErrorDisplay, DataSummary},
	// data(){
	// 	return {
	// 		selected: "table"
	// 	}
	// },
	computed:{
		...mapState({
			selected: state => state.nav.selected
		}),
		// selectedComponent(){
		// 	return this.selected == "table" ? ProductDisplay : ProductEditor
		// }
		selectedComponent(){
			switch(this.selected){
				case "table":
					return ProductDisplay
				case "editor":
					return ProductEditor
				case "summary":
					return DataSummary
			}
		}
	},
	methods:{
		...mapMutations({
			selectComponent: "nav/selectComponent"
		})
	},
	created(){
		this.$store.dispatch("getProductsAction")
	}	
}
</script>

