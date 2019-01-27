// console.log("Hello")
// console.log("Apples")
// console.log("This is a statement")
// console.log("This is also a statement")

////첫 번째 함수 선언방법
// const myFunc = function(){
//   console.log("This statement is inside the function")
// }
// console.log("This statement is outside the function")
//myFunc()

////2 번째 함수 선언 방법
// function myFunc(name, weather){
//   console.log("Hello " + name + ".")
//   console.log("It is " + weather + " today.")
// }

// myFunc("Adam", "sunny")

////3 디폴트 파라미터
// function myFunc(name, weather = "raining"){
//   console.log("Hello " + name + ".")
//   console.log("It is " + weather + " today.")
// }
// myFunc("Adam")

////4 나머지 파라미터
// function myFunc(name, weather, ...extraArgs){
//   console.log("Hello " + name + ".")
//   console.log("It is " + weather + " today.")
//   for(let i = 0; i < extraArgs.length; i++){
//     console.log("Extra Arg:" + extraArgs[i])
//   }
// }

// myFunc("Adam", "sunny", "one", "two", "three", "four")

////5 결과 반환
// function myFunc(name){
//   return "Hello " + name + "."
// }

// console.log(myFunc("Adam"))

////6 함수를 파라미터로 전달
// function myFunc(nameFunction){
//   return "Hello " + nameFunction() + "."
// }
// console.log(myFunc(function(){
//   return "Adam"
// }))

// function printName(nameFunction, printFunction){
//   printFunction(myFunc(nameFunction))
// }

// printName(function(){return "Adam"}, console.log)

////7 화살표 함수
// const myFunc = (nameFunction) => "Hello " + nameFunction() + "."
// const printName = (nameFunction, printFunction) => 
//   printFunction(myFunc(nameFunction))

// printName(function(){return "Adam"}, console.log)

////8 지역변수
// function messageFunction(name, weather){
//   let message = "Hello, Adam"
//   if(weather == "sunny"){
//     let message = "It is a nice day"
//     console.log(message)
//   }else{
//     let message = "It is " + weather + " today"
//     console.log(message)
//   }
//   console.log(message)
// }

// messageFunction("Adam", "raining")

// function varMessageFunction(name, weather){
//   var message = "Hello, Adam"
//   if(weather == "sunny"){
//     var message = "It is a nice day"
//     console.log(message)
//   }else{
//     var message = "It is " + weather + " today"
//     console.log(message)
//   }
//   console.log(message)
// }

// varMessageFunction("Adam", "raining")

//// 9 원시 타입
// //boolean
// let firstBool = true
// let secondBool = false
// //string
// let firstString = "This is a string"
// let secondString = 'And so is this'

//// 10 템플릿 문자열
// function messageFunction(weather){
//   let message = `It is ${weather} today`
//   console.log(message)
// }

// messageFunction("raining")

//// 11 숫자
// let daysInWeek = 7
// let pi = 3.14
// let hexValue = 0xffff

// //// 12 조건문
// let name = "Linor"
// if(name == "Adam"){
//   console.log("Name is Adam")
// }else if(name == "Jacqui"){
//   console.log("Name is Jacqui")
// }else{
//   console.log("Name is neither Adam or Jacqui")
// }

// switch(name){
//   case "Adam":
//     console.log("Name is Adam")
//     break
//   case "Jacqui":
//     console.log("Name is Jacqui")
//     break
//   default:
//     console.log("Name is neither Adam or Jacqui")
//     break
// }

// //// 12 Equal 연산자 대 Identity 연산자
// let firstVal = 5
// let secondVal = "5"
// if(firstVal == secondVal){
//   console.log("They are equal!!")
// }else{
//   console.log("They are not equal!")
// }
// if(firstVal === secondVal){
//   console.log("They are identical!!!")
// }else{
//   console.log("They are not identical!!!")
// }

// //// 13 명시적 형변환
// let myData1 = 5 + 5
// let myData2 = 5 + "5"
// console.log("Result 1: " + myData1)
// console.log("Result 2: " + myData2)

// let myData3 = (5).toString() + String(5)
// console.log("Result 3: " + myData3)

//// 문자열을 숫자료
// let firstVal = "5"
// let secondVal = "5"

// let result = Number(firstVal) + Number(secondVal)
// console.log("결과: " + result)

// ////배열
// let myArray = new Array()
// myArray[0] = 100
// myArray[1] = "Adam"
// myArray[2] = true

// console.log(myArray)

// ////Array Literal
// let myArray = [10, "Adam", true]
// console.log(myArray)

// ////배열 값 읽기
// let myArray = [100, "Adam", true]
// console.log(`Index 0: ${myArray[0]}`)

// myArray[0] = "화요일"
// console.log(`Index 0: ${myArray[0]}`)

// ////배열 값 열거하기
// let myArray = [100, "Adam", true]
// for(let i = 0; i < myArray.length; i++){
//   console.log(`Index ${i} : ${myArray[i]}`)
// }

// console.log("----")

// myArray.forEach((value, index) => console.log(`Index ${index} : ${value}`))

// //// 스프레드 연산자
// function printItems(numValue, stringValue, boolValue){
//   console.log(`Number: ${numValue}`)
//   console.log(`String: ${stringValue}`)
//   console.log(`Boolean: ${boolValue}`)
// }

// let myArray = [100, "Adam", true]
// printItems(myArray[0], myArray[1], myArray[2])
// printItems(...myArray)


// ////내장 배열 메서드
// let products = [
//   {name: "Hat", price: 24.5, stock: 10},
//   {name: "Kayak", price: 289.99, stock: 1},
//   {name: "Soccer Ball", price: 10, stock: 0},
//   {name: "Running Shoes", price: 116.50, stock: 20}
// ]

// let totalValue = products
//   .filter(item => item.stock > 0)
//   .reduce((prev, item) => prev + (item.price * item.stock), 0)
//   console.log(`Total value: $${totalValue.toFixed(2)}`)

// //// 객체
// let myData = new Object()
// myData.name = "Adam"
// myData.weather = "sunny"

// console.log(`Hello ${myData.name}.`)
// console.log(`Today is ${myData.weather}.`)

// /// 객체 리터럴
// let myData = {
//   name : "Adam",
//   weather : "sunny"
// }
// console.log(`Hello ${myData.name}.`)
// console.log(`Today is ${myData.weather}.`)

// //// 변수를 객체 프로퍼티로 사용하기
// let name= "Adam"
// let myData = {
//   name,
//   weather: "sunny"
// }
// console.log(`Hello ${myData.name}.`)
// console.log(`Today is ${myData.weather}.`)


// //// 함수를 메서드로 사용하기
// let myData = {
//   name: "Adam",
//   weather : "sunny",
//   printMessages: function(){
//     console.log(`Hello ${myData.name}.`)
//     console.log(`Today is ${myData.weather}.`)
//   }
// }
// myData.printMessages()

// //// 객체 프로퍼티 복사
// let myData = {
//   name: "Adam",
//   weather : "sunny",
//   printMessages: function(){
//     console.log(`Hello ${myData.name}.`)
//     console.log(`Today is ${myData.weather}.`)
//   }
// }

// let secondObject = {}
// Object.assign(secondObject, myData)
// secondObject.printMessages()

// //자바스크립트 모듈
// import addionFunction from "./maths/sum"
// let values = [10,20,30,40,50]
// let total = addionFunction(values)
// console.log(`Total: ${total}`)

// //// 모듈에 다양한 기능 정의
// import additionFunction from "./maths/sum"
// import { multiply, subtract } from "./maths/operations"
// let values = [10,20,30,40,50]
// console.log(`합계: ${additionFunction(values)}`)
// console.log(`곱하기 : ${multiply(values)}`)
// console.log(`빼기 : ${subtract(1000, values)}`)


// //// 모듈의 기능 명칭 변경
// import additionFunction from "./maths/sum"
// import { multiply, subtract as minus } from "./maths/operations"
// let values = [10,20,30,40,50]
// console.log(`합계: ${additionFunction(values)}`)
// console.log(`곱하기 : ${multiply(values)}`)
// console.log(`빼기 : ${minus(1000, values)}`)

// //// 모듈 전체 임포트
// import additionFunction from "./maths/sum"
// import * as ops from "./maths/operations"
// let values = [10,20,30,40,50]
// console.log(`합계: ${additionFunction(values)}`)
// console.log(`곱하기 : ${ops.multiply(values)}`)
// console.log(`빼기 : ${ops.subtract(1000, values)}`)

// ////여러 파일을 한 모듈로 합치기
// import * as math from "./maths"
// let values = [10,20,30,40,50]
// console.log(`합계: ${math.addition(values)}`)
// console.log(`곱하기 : ${math.multiply(values)}`)
// console.log(`빼기 : ${math.subtract(1000, values)}`)
// console.log(`평균 : ${math.mean(values)}`)

// ////모듈에서 각각의 기능 임포트하기
// import {addition as add, multiply, subtract, mean as average} from "./maths"
// let values = [10,20,30,40,50]
// console.log(`합계: ${add(values)}`)
// console.log(`곱하기 : ${multiply(values)}`)
// console.log(`빼기 : ${subtract(1000, values)}`)
// console.log(`평균 : ${average(values)}`)

// ////비동기 연산의 문제점 이해하기
// import { asyncAdd } from "./maths"
// let values = [10,20,30,40,50]
// let total = asyncAdd(values)
// console.log(`메인 토탈 : ${total}`)

// ////프라미스 사용
// import { asyncAdd } from "./maths"
// let values = [10,20,30,40,50]
// asyncAdd(values)
// 	.then(total => console.log(`메인 토탈 : ${total}`))

////비동기 코드 단순화하기
import { asyncAdd } from "./maths"
let values = [10,20,30,40,50]
async function doTask(){
	let total = await asyncAdd(values)
	console.log(`메인 합계 : ${total}`)
}
doTask()