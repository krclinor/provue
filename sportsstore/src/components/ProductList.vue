<template>
	<div>
		<div class="card m-1 p-1 bg-light"
			v-for="p in products" :key="p.id">
			<h4>
				{{p.name}}
				<span class="badge badge-pill badge-primary float-right">
					{{p.price | currency}}
				</span>
			</h4>
			<div class="card-text bg-white p-1">
				{{p.description}}
			</div>
		</div>
		<page-controls/>
	</div>
</template>

<script>
import {mapGetters} from "vuex"
import PageControls from "./PageControls"

export default {
	components: {PageControls},
	computed : {
		...mapGetters({products: "processedProducts"})
	},
	filters:{
		currency(value){
			return new Intl.NumberFormat("ko-KR", {style: "currency", currency: "KRW"}).format(value)
		}
	}
}
</script>
