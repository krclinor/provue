<template>
	<div class="bg-primary text-white text-center m-2 p-3">
		<h3>Product: {{name}}</h3>
		<h3>Price1: ${{ (price + (price * (taxRate / 100))).toFixed(2)}}</h3>
		<h3>Price2: ${{totalPrice.toFixed(2)}}</h3>
		<h4>Price: ${{ lowTotalPrice.toFixed(2)}} (Low Rate)</h4>
		<h4>Price: ${{ highTotalPrice.toFixed(2)}} (High Rate)</h4>

		<h2>필터 적용</h2>
		<h4>Price: {{ lowTotalPrice.toFixed(2) | currency}} (Low Rate)</h4>
		<h4>Price: {{ highTotalPrice.toFixed(2) | currency}} (High Rate)</h4>

		<h2>매개변수를 이용한 필터 적용</h2>
		<h4>Price: {{ getTotalPrice(lowTaxRate) | currency(3)}} (Low Rate)</h4>
		<h4>Price: {{ getTotalPrice(highTaxRate) | currency(4)}} (High Rate)</h4>

		<h2>필터 체이닝</h2>
		<h3>Product: {{name2 | reverse | capitalize}}</h3>
	</div>
</template>
<script>
export default {
	name: "MyComponent",
	data(){
		return {
			name: "Kayak",
			name2 : "Lifejacket",
			price : 275,
			taxRate: 22,
			counter: 0,
			lowTaxRate : 12,
			highTaxRate : 20
		}
	},
	computed:{
		totalPrice(){
			let tp = this.price + (this.price * (this.taxRate/ 100))
			//--  computed 에서 프로퍼티를 변경하는 행위를 해서는 안된다.
			//console.log(`Calculaed: ${this.counter++} (${this.taxRate})`)
			return tp
		},
		lowTotalPrice(){
			//// -- 중복제거
			//let tp = this.price + (this.price * (this.lowTaxRate / 100))
			//return tp
			return this.getTotalPrice(this.lowTaxRate)
		},
		highTotalPrice(){
			//// -- 중복제거
			//let tp = this.price + (this.price * (this.highTaxRate / 100))
			// return tp
			return this.getTotalPrice(this.highTaxRate)
		}
	},
	methods:{
		getTotalPrice(taxRate){
			return this.price + (this.price * (taxRate / 100))
		}
	},
	filters:{
		currency(value, places=2){
			return new Intl.NumberFormat("en-US", {
				style: "currency", 
				currency: "USD",
				minimumFractionDigits: places,
				maximumFractionDigits: places
			}).format(value)
		},
		capitalize(value){
			return value[0].toUpperCase() + value.slice(1)
		},
		reverse(value){
			return value.split("").reverse().join("")
		}
	}
}
</script>
