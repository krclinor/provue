import Vue from "vue"
import VueRouter from "vue-router"

import ProductDisplay from "../components/ProductDisplay"
import ProductEditor from "../components/ProductEditor"

Vue.use(VueRouter)

export default new VueRouter({
	// mode: "history", "hash"
	// hash : 디폴트 모드로 대부분의 브라우저에서 지원함. URL예 #표시됨
	//  예) http://localhost:8080/#/edit
	// hisory : 최신 브라우저에서 지원 #표시 없음.
	//  예) http://localhost:8080/edit
	mode: "history",
	routes:[
		// {path: "/", component: ProductDisplay, alias: "/list"},
		// 이름지정 방식
		// 사용법 : <router-link :to="{name: 'table'}">Cancel</router-link>
		{name: "table", path: "/", component: ProductDisplay, alias: "/list"},

		// {path: "/edit/:id", component: ProductEditor},
		// {path: "/create", component: ProductEditor},
		// 위 2개의 경로를 정규 표현식으로 합치기
		{name: "editor", path: "/:op(create|edit)/:id(\\d+)?", component: ProductEditor},

		// catchall route
		// 위 경로와 일치하지 않는 경우 "/"로 redirect
		// routes설정의 맨 하단에 정의해야 한다.
		{path: "*", redirect: "/"}
	]
})