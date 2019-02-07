<template>
	<div class="container-fluid">
		<div class="bg-info m-2 p-2 text-white">
			<div>Value : {{dataValue}}</div>
			<div>Other Value: {{otherValue || "(Empty)"}}</div>
		</div>

		<div class="bg-primary m-2 p-2 text-white">
			<div class="form-check">
				<label class="form-check-label">
					<input class="form-check-input" type="checkbox"
						@change="handleChange"
						:checked="dataValue" />
					Data Value
				</label>
			</div>
		</div>
		<div class="bg-primary m-2 p-2">
			<input type="text" class="form-control"
				@input="handleChange"
				:value="otherValue"/>
		</div>
		<div class="text-center m-2">
			<button class="btn btn-secondary"
				@click="reset">
				Reset
			</button>
		</div>
		<p></p>
		<h4>2-way 데이타바인딩 단순화 v-model</h4>
		<div class="bg-info m-2 p-2 text-white">
			<div>Value : {{dataValue2}}</div>
			<div>Other Value: {{otherValue2 || "(Empty)"}}</div>
		</div>

		<div class="bg-primary m-2 p-2 text-white">
			<div class="form-check">
				<label class="form-check-label">
					<input class="form-check-input" type="checkbox"
						v-model="dataValue2" />
					Data Value
				</label>
			</div>
		</div>
		<div class="bg-primary m-2 p-2">
			<input type="text" class="form-control"
				v-model="otherValue2"/>
		</div>
		<div class="text-center m-2">
			<button class="btn btn-secondary"
				@click="reset2">
				Reset
			</button>
		</div>
		<p></p>
		<h4>텍스트 필드 바인딩</h4>
		<div class="bg-info m-2 p-2 text-white">
			<div>Name: {{name}}</div>
			<div>Password: {{password}}</div>
			<div>Details: {{details}}</div>
		</div>
		<div class="bg-primary m-2 p-2 text-white">
			<div class="form-group">
				<label>Name</label>
				<input class="form-control" v-model="name"/>
			</div>
			<div class="form-group">
				<label>Password</label>
				<input class="form-control" type="password" v-model="password"/>
			</div>
			<div class="form-group">
				<label>Details</label>
				<textarea class="form-control" v-model="details"/>
			</div>
		</div>
		<p></p>
		<h4>라디오버튼, 체크박스 바인딩</h4>
		<div class="bg-info m-2 p-2 text-white">
			<div>Name: {{name2}}</div>
			<div>Has Admin Access: {{hasAdminAccess}}</div>
		</div>
		<div class="bg-primary m-2 p-2 text-white">
			<div class="form-check">
				<input type="radio" class="form-check-input" v-model="name2" value="Bob"/>
				<label class="form-check-label">Bob</label>
			</div>
			<div class="form-check">
				<input type="radio" class="form-check-input"
					v-model="name2" value="Alice"/>
				<label class="form-check-label">Alice</label>
			</div>
			<div class="form-check">
				<input type="checkbox" class="form-check-input" v-model="hasAdminAccess"/>
				<label class="form-check-label">Has Admin Access?</label>
			</div>
		</div>
		<p></p>
		<h4>라디오버튼 생성</h4>
		<div class="bg-info m-2 p-2 text-white">
			<div>Name: {{name3}}</div>
		</div>
		<div class="bg-primary m-2 p-2 text-white">
			<div class="form-check"
				v-for="n in allNames" :key="n">
				<input type="radio" class="form-check-input" 
					v-model="name3" :value="n"/>
				<label class="form-check-label">{{n}}</label>
			</div>
		</div>
		<p></p>
		<h4>Select 엘리먼트 바인딩</h4>
		<div class="bg-info m-2 p-2 text-white">
			<div>Name: {{name4}}</div>
		</div>
		<div class="bg-primary m-2 p-2 text-white">
			<div class="form-group">
				<label>Selected Names</label>
				<select class="form-control" v-model="name4">
					<option value="all">Everyone</option>
					<option v-for="n in allNames" :key="n" :value="n">Just {{n}}</option>
				</select>
			</div>
		</div>
		<p></p>
		<h4>숫자 처리 오류</h4>
		<div class="bg-info m-2 p-2 text-white">
			<div>Amount: {{amount}}, Amount + 10 = {{amount + 10}}</div>
		</div>
		<div class="bg-primary m-2 p-2 text-white">
			<div class="form-group">
				<label>Amount</label>
				<input type="number" class="form-control" v-model="amount">
			</div>
		</div>
		<p></p>
		<h4>숫자 처리 수정자 number</h4>
		<div class="bg-info m-2 p-2 text-white">
			<div>Amount: {{amount2}}, Amount + 10 = {{amount2 + 10}}</div>
		</div>
		<div class="bg-primary m-2 p-2 text-white">
			<div class="form-group">
				<label>Amount</label>
				<input type="number" class="form-control" v-model.number="amount2">
			</div>
		</div>
		<p></p>
		<h4>업데이트 지연 수정자 lazy</h4>
		<div class="bg-info m-2 p-2 text-white">
			<div>Amount: {{amount3}}, Amount + 10 = {{amount3 + 10}}</div>
		</div>
		<div class="bg-primary m-2 p-2 text-white">
			<div class="form-group">
				<label>Amount</label>
				<input type="number" class="form-control" v-model.number.lazy="amount3">
			</div>
		</div>
		<p></p>
		<h4>공백문자 제거 수정자 trim</h4>
		<div class="bg-info m-2 p-2 text-white">
			<div>Name : **{{name5}}**</div>
		</div>
		<div class="bg-primary m-2 p-2 text-white">
			<div class="form-group">
				<label>Name</label>
				<input type="text" class="form-control" v-model.trim="name5">
			</div>
		</div>

		<p></p>
		<h4>아이템 배열 선택</h4>
		<div class="bg-info m-2 p-2 text-white">
			<div>Selected Cities: {{cities}}</div>
		</div>
		<div class="bg-primary m-2 p-2 text-white">
			<div class="form-check m-2"
				v-for="city in cityNames" :key="city">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input"
						v-model="cities" :value="city" />
					{{city}}
				</label>
			</div>
		</div>
		<div class="text-center m-2">
			<button class="btn btn-info"
				@click="reset3">
				Reset
			</button>
		</div>
		<p></p>
		<h4>폼 엘리먼트 커스텀 값</h4>
		<div class="m-2 p-2 text-white" :class="elemClass">
			<div>Value: {{elemClass}}</div>
		</div>
		<div class="form-check m-2">
			<label class="form-check-label">
				<input type="checkbox" class="form-check-input"
					v-model="dataValue3"/>
				Dark Color
			</label>
		</div>
		<p></p>
		<h4>true-value, false-value</h4>
		<div class="m-2 p-2 text-white" :class="dataValue4">
			<div>Value: {{dataValue4}}</div>
		</div>
		<div class="form-check m-2">
			<label class="form-check-label">
				<input type="checkbox" class="form-check-input"
					v-model="dataValue4" 
					true-value="bg-primary"
					false-value="bg-info"/>
				Dark Color
			</label>
		</div>

		<p></p>
		<h4>라디오버튼, 셀랙트 엘리먼트를 위한 맞춤형 값</h4>
		<div class="m-2 p-2 text-white" :class="dataValue4">
			<div>Value: {{dataValue5}}</div>
		</div>
		<div class="form-check m-2">
			<label class="form-check-label">
				<input type="checkbox" class="form-check-input"
					v-model="dataValue5" 
					:true-value="darkColor"
					:false-value="lightColor"/>
				Dark Color
			</label>
		</div>
		<div class="form-group m-2 p-2 bg-secondary">
			<label>Color</label>
			<select class="form-contro" v-model="dataValue5">
				<option :value="darkColor">Dark Color</option>
				<option :value="lightColor">Light Color</option>
			</select>
		</div>
		<div class="form-check-inline m-2">
			<label class="form-check-label">
				<input type="radio" class="form-check input"
					v-model="dataValue5" :value="darkColor"/>
			</label>
		</div>
		<div class="form-check-inline m-2">
			<label class="form-check-label">
				<input type="radio" class="form-check-input"
					v-model="dataValue5" :value="lightColor" />
				Light Color
			</label>
		</div>

		<p></p>
		<h4>폼 유효성 체크</h4>
		<div class="m-2 p-2 text-white my-2 p-2">
			Name: {{name6}}, Category: {{category}}, Price: {{price}}
		</div>
		<div class="bg-danger text-white my-2 p-2" v-if="errors">
			<h5>The following problems have been found:</h5>
			<ul>
				<template v-for="(errors) in validationErrors">
					<li v-for="error in errors" :key="error">{{error}}</li>
				</template>
			</ul>
		</div>
		<form @submit.prevent="handleSubmit">
			<div class="form-group">
				<label>Name</label>
				<input class="form-control" v-model="name6" />
			</div>
			<div class="form-group">
				<label>Category</label>
				<input class="form-control" v-model="category" />
			</div>
			<div class="form-group">
				<label>Price</label>
				<input type="number" class="form-control" v-model.number="price" />
			</div>
			<div class="text-center">
				<button class="btn btn-primary" type="submit">Submit</button>
			</div>
		</form>
	</div>
</template>

<script>
import validation from "./validationRules"
import Vue from "vue"

export default {
	name: "MyComponent",
	data(){
		return {
			dataValue: false,
			otherValue: "",
			dataValue2: false,
			otherValue2: "",

			name: "Bob",
			password: "secret",
			details: "Has admin access",

			name2: "Bob",
			hasAdminAccess: true,

			name3: "Bob",
			allNames: ["Bob", "Alice", "Joe"],
			name4: "Bob",

			amount: 100,
			amount2: 100,
			amount3: 100,
			name5: "Bob",
			
			cityNames: ["London", "New York", "Paris", "Berlin"],
			cities: [],

			dataValue3: false,
			dataValue4: "bg-info",

			darkColor: "bg-primary",
			lightColor: "bg-info",
			dataValue5: "bg-info",

			name6: "",
			category:"",
			price: 0,

			validationErrors: {},
			hasSubmitted: false
		}
	},
	watch:{
		name6(value){this.validateWatch("name", value)},
		category(value){this.validateWatch("category", value)},
		price(value){this.validateWatch("price", value)}
	},
	computed:{
		elemClass(){
			return this.dataValue3 ? "bg-primary" : "bg-info"
		},

		errors(){
			return Object.values(this.validationErrors).length > 0
		}
	},
	methods:{
		reset(){
			this.dataValue = false
			this.otherValue = ""
		},
		reset2(){
			this.dataValue2 = false
			this.otherValue2 = ""
		},
		handleChange($event){
			if($event.target.type == "checkbox"){
				this.dataValue = $event.target.checked
			}else{
				this.otherValue = $event.target.value
			}
			
		},
		reset3(){
			this.cities = []
		},
		handleSubmit(){
			this.hasSubmitted = true
			if(this.validateAll()){
				console.log(`FORM SUBMITTED: ${this.name6} ${this.category} ${this.price}`)
			}
		},

		validate(propertyName, value){
			let errors = []
			Object(validation)[propertyName].forEach(v => {
				if(!v.validator(value)){
					errors.push(v.message)
				}
			})
			if(errors.length > 0){
				Vue.set(this.validationErrors, propertyName, errors)
			}else {
				Vue.delete(this.validationErrors, propertyName)
			}
		},
		validateAll(){
			this.validate("name", this.name)
			this.validate("category", this.category)
			this.validate("price", this.price)
			return !this.errors
		},
		validateWatch(propertyName, value){
			if(this.hasSubmitted){
				this.validate(propertyName, value)
			}
		}
	}
}
</script>

