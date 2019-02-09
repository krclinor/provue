import Vue from "vue"
import VueRouter from "vue-router"

// route 모듈
import BasicRoutes from "./basicRoutes"
import SideBySideRoutes from "./sideBySideRoutes"

Vue.use(VueRouter)

const router = new VueRouter({
	mode: "history",
	routes:[
		...BasicRoutes,
		SideBySideRoutes,
		{path: "*", redirect: "/products"}
	]
})

export default router

router.beforeEach((to, from, next) => {
	if(to.path == "/preferences" && from.path.startsWith("/named")){
		next(false)
	}else{
		next()
	}
})

// router.beforeEach((to, from, next) => {
// 	if(to.path == "/named/tableright"){
// 		// next("/products")
// 		next({name: "editor", params:{op:"edit", id: 1}})
// 	}else{
// 		next()
// 	}
// })

router.beforeResolve((to, from, next) => {
	if(to.path == "/named/tableright"){
		// next("/products")
		next({name: "editor", params:{op:"edit", id: 1}})
	}else{
		next()
	}
})

// next() 후속처리 진행
// next(false) 후속처리 취소
// next(url) url주소로 이동
// next(object) route객체에 설정된 곳으로 이동
// next(error) 

// guard 처리 순서
// global.beforeEach -> local.beforeEnter -> global.beforeResolve