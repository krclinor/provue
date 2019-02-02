<template>
	<div class="row mt-2">
		<div class="col-3 form-group">
			<select class="form-control" @change="changePageSize">
				<option value="4">4 per page</option>
				<option value="8">8 per page</option>
				<option value="12">12 per page</option>
			</select>
		</div>
		<div class="text-right col">
			<button class="btn btn-secondary mx-1"
				:disabled="currentPage == 1"
				@click="setCurrentPage(currentPage - 1)">
				Previous
			</button>
			<span v-if="currentPage > 4">
				<button class="btn btn-secondary mx-1"
					@click="setCurrentPage(1)">
					1
				</button>
				<span class="h4">...</span>
			</span>
			<span class="mx-1">
				<button class="btn"
					v-for="i in pageNumbers"
					:key="i"
					:class="{'btn-primary': i == currentPage, 'btn-secondary': i != currentPage}"
					@click="setCurrentPage(i)">
					{{i}}
				</button>
			</span>
			<span v-if="currentPage <= pageCount - 4">
				<span class="h4">...</span>
				<button class="btn btn-secondary mx-1"
					@click="setCurrentPage(pageCount)">
					{{pageCount}}
				</button>
			</span>
			<button class="btn btn-secondary mx-1"
				:disabled="currentPage == pageCount"
				@click="setCurrentPage(currentPage + 1)">
				Next
			</button>
		</div>
	</div>
</template>
<script>
import {mapState, mapGetters, mapActions} from "vuex"
export default {
	computed:{
		...mapState(["currentPage"]),
		...mapGetters(["pageCount"]),
		pageNumbers(){
			if(this.pageCount < 4){
				return [...Array(this.pageCount + 1).keys()].slice(1)
			}else if (this.currentPage <= 4){
				return [1, 2, 3, 4, 5]
			}else if ((this.currentPage + 4) > this.pageCount){
				return [this.pageCount - 4, this.pageCount - 3, this.pageCount - 2, this.pageCount - 1, this.pageCount]
			}else {
				return [this.currentPage - 1, this.currentPage, this.currentPage + 1]
			}
		}
	},
	methods:{
		...mapActions(["setCurrentPage", "setPageSize"]),
		changePageSize($event){
			this.setPageSize(Number($event.target.value))
		}
	}
}
</script>
