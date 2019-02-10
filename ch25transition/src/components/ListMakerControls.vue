<template>
	<tfoot>
		<!-- transitions에 이벤트 달기 -->
		<!-- <transition @beforeEnter="beforeEnter"
			@after-enter="afterEnter" mode="out-in"> -->

		<!-- beforeEnter, afterEnter를 enter이벤트로 실행 -->
		<transition @enter="enter" mode="out-in">
			<tr v-if="showAdd" key="addcancel">
				<td></td>
				<td>
					<input type="text" class="form-control" v-model="currentItem">
				</td>
				<td>
					<button id="add" class="btn btn-sm btn-info"
						@click="handleAdd">
						Add
					</button>
					<button id="cancel" class="btn btn-sm btn-secondary"
						@click="showAdd = false">
						Cancel
					</button>
				</td>
			</tr>
			<tr v-else key="show">
				<td colspan="4" class="text-center p-2">
					<button class="btn btn-info"
						@click="showAdd = true">
						Show Add
					</button>
				</td>
			</tr>
		</transition>
	</tfoot>
</template>
<script>
import {styler, tween } from "popmotion"

export default {
	data(){
		return {
			showAdd: false,
			currentItem: ""
		}
	},
	methods:{
		handleAdd(){
			this.$emit("add", this.currentItem)
			this.showAdd = false
		},
		beforeEnter(el){
			if(this.showadd){
				el.classList.add("animated", "fadeIn")
			}
		},
		afterEnter(el){
			el.classList.remove("animated", "fadeIn")
		},
		enter(el, done){
			if(this.showAdd){
				let t = tween({
					from: {opacity: 0},
					to: { opacity: 1},
					duration: 250
				})
				t.start({
					update: styler(el).set,
					complete: done
				})
			}
		}
	}
}
</script>