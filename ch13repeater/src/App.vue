<template>
	<div class="container-fluid">
		<h2 class="bg-primary text-white text-center p-3">Products</h2>
		<table class="table table-sm table-bordered table-striped text-left">
			<tr>
				<th>Name</th><th>Price</th>
			</tr>
			<tbody>
				<tr v-for="p in products" :key="p.name">
					<td>{{p.name}}</td>
					<td>{{p.price | currency}}</td>
				</tr>
			</tbody>
		</table>
		<p></p>
		<h2 class="bg-primary text-white text-center p-3">아이템 인덱스</h2>
		<table class="table table-sm table-bordered text-left">
			<tr>
				<th>Index</th><th>Name</th><th>Price</th>
			</tr>
			<tbody>
				<tr v-for="(p,i) in products" :key="p.name" :odd="i % 2 == 0">
					<td>{{i + 1}}</td>
					<td>{{p.name}}</td>
					<td>{{p.price | currency}}</td>
				</tr>
			</tbody>
		</table>

		<div class="text-center">
			<button class="btn btn-primary"
				@click="handleClick">
				Press Me
			</button>
		</div>
		<p></p>
		<h2 class="bg-primary text-white text-center p-3">객체 수정 문제</h2>
		<table class="table table-sm table-bordered text-left">
			<tr>
				<th>Index</th><th>Name</th><th>Price</th>
			</tr>
			<tbody>
				<tr v-for="(p,i) in products2" :key="p.name" :odd="i % 2 == 0">
					<td>{{i + 1}}</td>
					<td>{{p.name}}</td>
					<td>{{p.price | currency}}</td>
				</tr>
			</tbody>
		</table>

		<div class="text-center">
			<button class="btn btn-primary"
				@click="handleClick2">
				Press Me
			</button>
		</div>
		<div class="text-center">
			<button class="btn btn-primary"
				@click="handleClick3">
				객체 수정
			</button>
		</div>
		<h2 class="bg-primary text-white text-center p-3">객체 프로퍼티 나열</h2>
		<table class="table table-sm table-bordered text-left">
			<tr>
				<th>Index</th><th>Key</th><th>Name</th><th>Price</th>
			</tr>
			<tbody>
				<tr v-for="(p, key, i) in products4" :key="p.name" :odd="i % 2 == 0">
					<td>{{i + 1}}</td>
					<td>{{key}}</td>
					<td>{{p.name}}</td>
					<td>{{p.price | currency}}</td>
				</tr>
			</tbody>
		</table>

		<div class="text-center">
			<button class="btn btn-primary"
				@click="handleClick4">
				Press Me
			</button>
		</div>
		<p></p>
		<h2 class="bg-primary text-white text-center p-3">HTML 단순 반복</h2>
		<div class="text-center">
			<button class="btn btn-primary m-1"
				v-for="i in 5" @click="handleClick5(i)"
				:key="i">
				{{i}}
			</button>
		</div>
		<p></p>
		<h2 class="bg-primary text-white text-center p-3">computed 프로퍼티 사용</h2>
		<table class="table table-sm table-bordered text-left">
			<tr><th>Name</th><th>Price</th></tr>
			<tbody>
				<tr v-for="p in pageItems" :key="p.name">
					<td>{{p.name}}</td>
					<td>{{p.price | currency}}</td>
				</tr>
			</tbody>
		</table>
		<div class="text-center">
			<button class="btn btn-secondary m-1"
				v-for="i in pageCount" @click="selectPage(i)"
				:class="{'bg-primary' : currentPage == i}"
				:key="i">
				{{i}}
			</button>
		</div>
		<p></p>
		<h2 class="bg-primary text-white text-center p-3">필터링, 소팅</h2>
		<table class="table table-sm table-bordered text-left">
			<tr><th>Name</th><th>Price</th></tr>
			<tbody>
				<tr v-for="p in pageItems2" :key="p.name">
					<td>{{p.name}}</td>
					<td>{{p.price | currency}}</td>
				</tr>
			</tbody>
		</table>
		<div class="text-center">
			<button class="btn btn-secondary m-1"
				@click="toggleSort"
				:class="{'bg-primary': sort}">
				Toggle Sort
			</button>
			<button class="btn btn-secondary m-1"
				@click="toggleFilter"
				:class="{'bg-primary': filter}">
				Toggle Filter
			</button>
			<button class="btn btn-secondary m-1"
				v-for="i in pageCount2"
				@click="selectPage(i)"
				:key="i"
				:class="{'bg-primary': currentPage==i}">
				{{i}}
			</button>
		</div>
	</div>
</template>
<script>
import Vue from "vue"

export default {
	name: "MyComponent",
	data(){
		return {
			pageSize: 3,
			currentPage: 1,
			filter: false,
			sort: false,
			products:[
				{name: "Kayak", price: 275},
				{name: "Lifejacket", price: 48.95},
				{name: "Soccer Ball", price: 19.50},
				{name: "Corner Flags", price: 39.95},
				{name: "Stadium", price: 79500},
				{name: "Thinking Cap", price: 16},
				{name: "Unsteady Chair", price: 29.95},
				{name: "Human Chess Board", price: 75},
				{name: "Bling Bling King", price: 1200},
			],
			products2:[
				{name: "Kayak", price: 275},
				{name: "Lifejacket", price: 48.95},
				{name: "Soccer Ball", price: 19.50},
				{name: "Corner Flags", price: 39.95},
				{name: "Stadium", price: 79500},
				{name: "Thinking Cap", price: 16},
			],
			products4:{
				"kayak": {name: "Kayak", price: 275},
				22: {name: "Lifejacket", price: 48.95},
				3: {name: "Soccer Ball", price: 19.50},
				"4": {name: "Corner Flags", price: 39.95},
			},
		}
	},
	computed:{
		pageCount(){
			return Math.ceil(this.products.length / this.pageSize)
		},
		pageItems(){
			let start = (this.currentPage - 1) * this.pageSize
			return this.products.slice(start, start + this.pageSize)
		},
		pageCount2(){
			return Math.ceil(this.dataItems.length / this.pageSize)
		},
		pageItems2(){
			let start = (this.currentPage - 1) * this.pageSize
			return this.dataItems.slice(start, start + this.pageSize)
		},
		dataItems(){
			let data = this.filter ?
				this.products.filter( p => p.price > 100) :
				this.products
			return this.sort ?
				data.concat().sort((p1, p2) => p2.price - p1.price) :
				data
		}
	},
	methods:{
		handleClick(){
			this.products.push(this.products.shift())
		},
		handleClick2(){
			this.products2[1] = {name: "Running Shoes", price: 100}
		},
		handleClick3(){
			//Vue.set(this.products2, 1, {name: "Running Shoes", price: 100})
			this.products2.splice(1,1,{name: "Running Shoes", price: 100})
		},
		handleClick4(){
			Vue.set(this.products4, 5, {name: "Running Shoes", price: 200})
		},
		handleClick5(i){
			console.log(i)
		},
		selectPage(page){
			this.currentPage = page
		},
		toggleFilter(){
			this.filter = !this.filter
			this.currentPage = 1
		},
		toggleSort(){
			this.sort = !this.sort
			this.currentPage = 1
		}
	},
	filters:{
		currency(value){
			return new Intl.NumberFormat("en-US",
				{style:"currency", currency:"USD"}).format(value)
		}
	}
}
</script>

<style>
	#tagged {background-color: coral;}

	[odd] { background-color: lightblue; }
</style>
