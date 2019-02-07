<template>
	<div class="bg-secondary text-white text-center m-2 p-2 h5">
		Root Component
		<p></p>
		<h4>ChildComponent</h4>
		<ChildComponent/>
		<p></p>
		<h4>child-component</h4>
		<child-component/>
		<p></p>
		<h4>태그 명 지정 MyFeature</h4>
		<my-feature/>
		<MyFeature/>
		<p></p>
		<h4>컴포넌트 격리</h4>
		{{message}}
		<p></p>
		<h4>props</h4>
		<ChildComponent2 labelText="Name" initialValue="Kayak" />
		<child-component2 label-text="Category" initial-value="Watersports"/>
		<p></p>
		<h4>props 표현식</h4>
		<div class="form-group">
			<input class="form-control"
				v-model="labelText" />
			<child-component2 :label-text="labelText" initial-value="Kayak"/>
		</div>
		<p></p>
		<h4>Custom Event로 자식 컴포넌트의 값 받아오기</h4>
		<div class="bg-secondary text-white text-center m-2 p-2 h5">
			<h6>{{message2}}</h6>
			<child-component3 :initial-product="product"
				@productSubmit="updateProduct"/>
		</div>
		<p></p>
		<h4>slot</h4>
		<div class="bg-secondary text-white text-center m-2 p-2 h5">
			<h6>{{message2}}</h6>
			<child-component4 :initial-product="product"
				@productSubmit="updateProduct">
				<div class="bg-warning m-2 p-2 h3 text-dark">Product Editor</div>
			</child-component4>
		</div>
		<p></p>
		<h4>named slot(지정 슬롯)</h4>
		<div class="bg-secondary text-white text-center m-2 p-2 h5">
			<h6>{{message2}}</h6>
			<child-component5 :initial-product="product"
				@productSubmit="updateProduct">
				<div slot="header" class="bg-warning m-2 p-2 h3 text-dark">
					Product Editor
				</div>
				<div slot="footer" class="bg-warning p-2 h3 text-dark">
					Check Details Before Submitting
				</div>
			</child-component5>
		</div>
		<p></p>
		<h4>scoped slot</h4>
		<div class="bg-secondary text-white text-center m-2 p-2 h5">
			<h6>{{message2}}</h6>
			<product-display :product="product">
				<div slot-scope="data" class="bg-info text-left">
					{{data.propname}} is {{data.propvalue}}
				</div>
			</product-display>
		</div>
	</div>
</template>
<script>
import ChildComponent from "./components/Child"
import ChildComponent2 from "./components/Child2"
import ChildComponent3 from "./components/Child3"
import ChildComponent4 from "./components/Child4"
import ChildComponent5 from "./components/Child5"
import ProductDisplay from "./components/ProductDisplay"

export default {
	name: "App",
	components: {
		ChildComponent,
		MyFeature: ChildComponent,
		ChildComponent2,
		ChildComponent3,
		ChildComponent4,
		ChildComponent5,
		ProductDisplay
	},
	data(){
		return {
			message: "This is the parent component",
			labelText: "Name",
			message2: "Ready",
			product: {
				name: "Kayak",
				category: "Watersports",
				price: 275
			}
		}
	},
	methods:{
		updateProduct(newProduct){
			this.message2 = JSON.stringify(newProduct)
		}
	}
}
</script>
