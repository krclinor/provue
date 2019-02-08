<template>
	<div class="form-group">
		<label>{{formattedLabel}}</label>
		<input class="form-control" v-model.number="value" 
			:class="[colors.bg, colors.text]"/>
	</div>
</template>

<script>
export default {
	props:["label", "editorFor"],
	data(){
		return {
			value: "",
			formattedLabel : this.format(this.label)
		}
	},
	// 의존성 주입
	// 상위 컴포넌트 어딘가에서 제공(ProductEditor.vue , 없으면 App.vue)
	// inject: ["colors"],
	inject: {
		colors: "colors",
		// 상위 컴포넌트에서 labelFormatter로 제공하는 서비스를 사용 하고
		// 없으면 default를 실행함
		format: {
			from: "labelFormatter",
			default: () => (value) => `Default ${value}`
		},
		// 로컬 이벤트버스를 위한 의존성 주입
		editingEventBus: "editingEventBus"
	},
	watch:{
		value(newValue){
			this.editingEventBus.$emit("change",
				{name: this.editorFor, value: this.value})
		}
	},
	created(){
		// 로컬 이벤트버스 이벤트 처리기 등록
		this.editingEventBus.$on("target", (p) => this.value = p[this.editorFor])
	}
}
</script>

