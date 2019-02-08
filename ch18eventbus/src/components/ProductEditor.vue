<template>
	<div>
		<editor-field label="ID"  editorFor="id"/>
		<editor-field label="Name" editorFor="name"/>
		<editor-field label="Price" editorFor="price"/>
	
		<div class="text-center">
			<button class="btn btn-primary" @click="save">{{editing ? "Save" : "Create"}}</button>
			<button class="btn btn-secondary"
				@click="cancel">
				Cancel
			</button>
		</div>
	</div>
</template>

<script>
	import Vue from "vue"
	import EditorField from "./EditorField";
	
	export default {
		components: {
			EditorField
		},
		data() {
			return {
				editing: false,
				product: {
					id: 0,
					name: "",
					price: 0
				},
				// 로컬 이벤트버스
				localBus: new Vue()
			};
		},
		methods: {
			startEdit(product) {
				// debugger
				this.editing = true;
				this.product = {
					id: product.id,
					name: product.name,
					price: product.price
				};
			},
			startCreate() {
				this.editing = false;
				this.product = {
					id: 0,
					name: "",
					price: 0
				};
			},
			save() {
				// 이벤트 버스의 이벤트 호출
				this.eventBus.$emit("complete", this.product)
				console.log(`Edit Complete: ${JSON.stringify(this.product)}`);
				this.startCreate();
			},
			cancel() {
				this.product = {};
				this.editing = false;
			}
		},
		// // 의존성 주입용 서비스 제공자
		// provide(){
		// 	return {
		// 		colors:{
		// 			bg: "bg-light",
		// 			text: "text-danger"
		// 		}
		// 	}
		// }"
	
		// 이벤트버스 사용을 위한 의존성 주입
		// main.js에서 정의
		inject: ["eventBus"],

		provide(){
			return {
				// 로컬이벤트버스 서비스 제공
				editingEventBus: this.localBus
			}
		},

		created() {
			// 이벤트버스 이벤트 처리기 등록
			this.eventBus.$on("create", this.startCreate);
			this.eventBus.$on("edit", this.startEdit);

			// 로컬이벤트버스 이벤트 처리기 등록
			this.localBus.$on("change", (change) => this.product[change.name] = change.value)
		},
		watch:{
			product(newValue, oldValue){
				this.localBus.$emit("target", newValue)
			}
		}
	};
</script>
