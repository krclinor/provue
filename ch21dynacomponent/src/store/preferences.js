export default{
	// // namespaced를 true로 지정할 경우 
	// // 모듈을 사용하기 위해서 모듈명을 접두어로 붙여서 사용해야 함.
	// namespaced: true,
	state: {
		stripedTable: true,
		primaryEditButton: false,
		dangerDeleteButton: false
	},
	getters:{
		editClass(state){
			return state.primaryEditButton ? "btn-primary" : "btn-secondary"
		},
		deleteClass(state){
			return state.dangerDeleteButton ? "btn-danger" : "btn-secondary"
		},
		// 매개변수 순서
		// 첫번째 : state, 두번째 : getter, 세번째 : rootState
		tableClass(state, getter, rootState){
			return rootState.products.length > 0 
				&& rootState.products[0].price > 500 ? "table-striped" : ""
		}
	},
	mutations:{
		setEditButtonColor(state, primary){
			state.primaryEditButton = primary
		},
		setDeleteButtonColor(state, danger){
			state.dangerDeleteButton = danger
		}
	}
}