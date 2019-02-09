<template>
	<div>
		<h3 class="btn-primary text-center text-white p-2">
			{{editing ? "Edit" : "Create"}}
		</h3>
		<div class="form-group">
			<label>ID</label>
			<input class="form-control" v-model="product.id" />
		</div>
		<div class="form-group">
			<label>Name</label>
			<input class="form-control" v-model="product.name" />
		</div>
		<div class="form-group">
			<label>Category</label>
			<input class="form-control" v-model="product.category" />
		</div>
		<div class="form-group">
			<label>Price</label>
			<input class="form-control" v-model.number="product.price" />
		</div>
		<div class="text-center">
			<button class="btn btn-primary"
				@click="save">
				{{editing ? "Save" : "Create"}}
			</button>
			<!-- 경로변경 HTML엘리먼트 -->
			<!-- <router-link to="/" class="btn btn-secondary"> -->
			<!-- 이름 지정방식 -->
			<router-link :to="{name: 'table'}" class="btn btn-secondary">
				Cancel
			</router-link>

			<router-link class="btn btn-info" 
				v-if="editing" :to="nextUrl">
				Next
			</router-link>
		</div>
	</div>
</template>
<script>
let unwatcher;
export default {
	data(){
		return {
			editing: false,
			product: {}
		}
	},
	computed:{
		nextUrl(){
			if(this.product.id != null && this.$store.state.products != null){
				let index = this.$store.state.products.findIndex(p => p.id == this.product.id)
				let target = index < (this.$store.state.products.length - 1) ? index + 1 : 0
				return `/edit/${this.$store.state.products[target].id}`
			}
			return "/edit"
		}
	},
	methods:{
		async save(){
			await this.$store.dispatch("saveProductAction", this.product)

			// 프로그램으로 경로변경
			// this.$router.push("/")
			//이름 지정방식
			this.$router.push({name: "table"})

			this.product = {}
		},
		selectProduct(route){
			// $route 프로퍼티 
			// name : route의 이름
			// path : URL 경로
			// params : 경로에 포함된 파라미터 맵 오브젝트
			// query: query문자열 맵 오브젝트
			//    예) /edit/4?validate=true -> this.$route.query.validate: true 

			// if(this.$route.path == "/create"){
			if(route.params.op == "create"){
				this.editing = false
				this.product = {}
			}else{
				let productId = route.params.id
				let selectedProduct = 
					this.$store.state.products.find(p => p.id == productId)
				this.editing = true;
				this.product = {}
				Object.assign(this.product, selectedProduct)
			}
		}
	},
	created(){
		unwatcher = this.$store.watch(state =>
			state.products, () => this.selectProduct(this.$route))
		// 인스턴스 생성시 현재 route정보로 제품 선택 처리
		this.selectProduct(this.$route)
	},
	beforeDestroy(){
		unwatcher()
	},
	// 현재 컴포넌트의 인스턴스는 변하지 않으면서 내용만 변경하고자 하는 경우
	beforeRouteUpdate(to, from, next){
		//인스턴스 재사용시 다음 route정보로 제품 선택 처리
		this.selectProduct(to)
		next()
	}
}
</script>
