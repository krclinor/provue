<template>
	<div class="container-fluid text-center">
		<div class="bg-primary text-white m-2 p-3">
			<h3>Product: {{ name }}</h3>
			<h3>Product: <span v-text="name"></span></h3>
			<p/>
			<h2>HTML 표시(v-text)</h2>
			<span v-text="fragment"></span>
			<p/>
			<h2>HTML 표시(v-html)</h2>
			<span v-html="fragment"></span>

			<h2>v-if</h2>
			<h4 v-if="showElements">{{price}}</h4>
			<p></p>
			<h2>template v-if(div나 span을 사용할 수 없는 경우)</h2>
			<ul class="text-left">
				<li>List item</li>
				<template v-if="showElements">
					<li>{{name}}</li>
					<li>{{price}}</li>
				</template>
				<li>Other list items</li>
			</ul>
			<p></p>
			<h2>v-if v-else</h2>
			<h4 v-if="showElements">Product: {{name}}</h4>
			<h4 v-else>Price: {{price}}</h4>
			<p></p>
			<h2>v-if v-else-if v-else</h2>
			<h4 v-if="counter % 3 == 0"> Product: {{name}}</h4>
			<h4 v-else-if="counter % 3 == 1">Price: {{price}}</h4>
			<h4 v-else>Category: {{category}}</h4>
		</div>
		<p></p>
		<h2>CSS를 이용한 Element 선택적 표시</h2>
		<h3>v-if, v-else사용시</h3>
		<div class="bg-primary text-white m-2 p-3">
			<h5 v-if="counter % 2 == 0">Product: {{name}}</h5>
			<h5 v-else>Price: {{price}}</h5>
		</div>
		<h3>v-show 사용시</h3>
		<div class="bg-primary text-white m-2 p-3">
			<h5 v-show="counter % 2 == 0">Product: {{name}}</h5>
			<h5 v-show="counter % 2 != 0">Price: {{price}}</h5>
		</div>
		<p></p>
		<h2>v-bind, :</h2>
		<div class="bg-primary text-white m-2 p-3">
			<h4 :class="elemClasses">Product: {{name}}</h4>
		</div>		
		<p></p>
		<h2>객체로 class 설정하기</h2>
		<div class="bg-primary text-white m-2 p-3">
			<h4 :class="elemClasses2" class="display-4">Product: {{name}}</h4>
		</div>		
		<p></p>
		<h2>개별 Style 적용하기</h2>
		<div class="bg-primary text-white m-2 p-3">
			<h4 :style="elemStyles" class="display-4">Product: {{name}}</h4>
		</div>		
		<h2>기타 속성 설정하기</h2>
		<div class="bg-primary text-white m-2 p-3">
			<h4 :data-size="size" class="display-4">Product: {{name}}</h4>
		</div>		
		<h2>다중 속성 설정하기</h2>
		<div class="bg-primary text-white m-2 p-3">
			<h4 v-bind="attrValues">Product: {{name}}</h4>
		</div>		
		<h2>엘리먼트의 프로퍼티 설정하기</h2>
		<div class="bg-primary text-white m-2 p-3">
			<h4 :text-content.prop="textContent"></h4>
		</div>		
		<button @click="handleClick" class="btn btn-primary">
			Press Me
		</button>
		<button @click="handleOtherClick" class="btn btn-primary">
			Or Press Me
		</button>
	</div>
</template>

<script>
	export default {
		name: "MyComponent",
		data: function() {
			return {
				name: "Lifejacket",
				fragment: `<div class="form-group">
					Password 
					<input class="form-control"/>
				</div>`,
				price: 275,
				category: "Watersports",
				counter: 0,
				showElements: true,
				highlight: false,
				highlight1: false,
				highlight2: false
			}
		},
		computed:{
			elemClasses(){
				return this.highlight ?
					["bg-light", "text-dark", "display-4"] :
					["bg-dark", "text-light", "p-d"]
			},
			elemClasses2(){
				return {
					"text-dark": this.highlight1,
					"bg-light": this.highlight2
				}
			},
			elemStyles(){
				return {
					"border" : "5px solid red",
					"background-color": this.highlight ? "coral": ""
				}
			},
			size(){
				return this.highlight ? "big": "small"
			},
			attrValues(){
				return {
					class: this.highlight ? ["bg-light", "text-dark"] : [],
					style: {
						border: this.highlight ? "5px solid red" : ""
					},
					"data-size": this.highlight ? "big" : "small"
				}
			},
			textContent(){
				return this.highlight ? "Highlight!" : `Product : ${this.name}`
			}
		},
		methods: {
			handleClick() {
				this.showElements = !this.showElements
				this.counter++
				this.highlight = !this.highlight
				this.highlight1 = !this.highlight1
			},
			handleOtherClick(){
				this.highlight2 = !this.highlight2
			}
		}
	}
</script>
<style>
	h5:first-child {background-color: aquamarine; padding: 10px; color: black;}
	[data-size=big] {font-size: 40pt;}
	[data-size=small] {font-size: 20pt;}
</style>