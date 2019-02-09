import Vue from "vue"
import Vuex from "vuex"
import Axios from "axios"

import PrefsModule from "./preferences"

Vue.use(Vuex)

const baseUrl = "http://localhost:3500/products/"

export default new Vuex.Store({
	// state를 직접 수정하지 못하도록 함
	// 성능에 영향을 미치므로 개발에서만 적용
	strict: true,
	// vuex모듈 등록
	modules:{
		prefs: PrefsModule
	},
	state:{
		products: [
			// {id: 1, name: "Product #1", category: "Test", price: 100},
			// {id: 2, name: "Product #2", category: "Test", price: 150},
			// {id: 3, name: "Product #3", category: "Test", price: 200},
		],
		selectedProduct : null
	},
	// 컴포넌트의 computed와 비슷
	getters:{
		orderedProducts(state){
			return state.products.concat().sort((p1, p2) => p2.price - p1.price)
		},
		// getter에서 사용되는 첫번째 파라미터 : state, 두번째 파라미터 : getters
		filteredProducts(state, getters){
			// return getters.orderedProducts.filter(p => p.price > 100)

			// 추가 매개변수 처리
			return (amount) => getters.orderedProducts.filter(p => p.price > amount)
		}
	},
	// state를 변경할 때 사용
	// 비동기처리는 불가능
	mutations:{
		saveProduct(state, product){
			let index = state.products.findIndex(p => p.id == product.id)
			if(index == -1){
				state.products.push(product)
			}else{
				state.products.splice(index, 1, product)
			}
		},
		deleteProduct(state, product){
			let index = state.products.findIndex(p => p.id == product.id)
			state.products.splice(index, 1)
		},
		selectProduct(state, product){
			state.selectedProduct = product
		}
	},

	// 비동기 처리에 사용
	// state 변경은 mutation의 commit으로 호출
	// action에서 action호출은 dispatch로 호출
	actions:{
		async getProductsAction(context){
			(await Axios.get(baseUrl)).data
				.forEach(p => context.commit("saveProduct", p))
		},
		async saveProductAction(context, product){
			let index = context.state.products.findIndex(p => p.id == product.id)
			if(index == -1){
				await Axios.post(baseUrl, product)
			}else{
				await Axios.put(`${baseUrl}${product.id}`, product)
			}
			context.commit("saveProduct", product)
		},
		async deleteProductAction(context, product){
			await Axios.delete(`${baseUrl}${product.id}`)
			context.commit("deleteProduct", product)
		}
	}
})