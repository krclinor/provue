import addition from "./sum"

export function mean(values){
	return addition(values)/values.length
}
export {addition}
export * from "./operations"

// ////비동기 연산의 문제점 이해하기
// export function asyncAdd(values){
// 	setTimeout(() => {
// 		let total = addition(values)
// 		console.log(`비동기 합계: ${total}`)
// 		return total
// 	}, 500)
// }

////프라미스 사용
export function asyncAdd(values){
	return new Promise((callback)=>{
		setTimeout(() => {
			let total = addition(values)
			console.log(`비동기 합계: ${total}`)
			callback(total)
		}, 500)
	})
}