<template>
	<div class="container-fluid">
		<div class="bg-primary text-white m-2 p-3 text-center">
			<h3 @click="name='Clicked!!'">{{name}}</h3>
		</div>
		<p></p>
		<h4 class="bg-primary text-white text-center m-2 p-2">event 객체</h4>
		<div class="bg-primary text-white m-2 p-3 text-center">
			<h3 @click="name= $event.type">{{name}}</h3>
		</div>
		<p></p>
		<h4 class="bg-primary text-white text-center m-2 p-2">메서드로 이벤트 처리하기</h4>
		<div class="bg-primary text-white m-2 p-3 text-center">
			<h3 @click="handleEvent">{{name}}</h3>
		</div>
		<p></p>
		<h4 class="bg-primary text-white text-center m-2 p-2">
			매개변수 사용
		</h4>
		<div class="bg-primary text-white m-2 p-3 text-center">
			<h3 @click="handleEvent2('Soccer Ball', $event)">{{name}}</h3>
		</div>
		<div class="bg-primary text-white m-2 p-3 text-center">
			<h3 @click="handleEvent2('Stadium', $event)">{{name}}</h3>
		</div>
		<p></p>
		<h4 class="bg-primary text-white text-center m-2 p-2">
			반복문 내에서 이벤트 처리
		</h4>
		<h3 class="bg-primary text-white text-center mt-2 p-2">
			{{message}}
		</h3>
		<table class="table table-sm table-striped table-bordered">
			<tr>
				<th>Index</th><th>Name</th><th>Actions</th>
			</tr>
			<tr v-for="(name2, index) in names" :key="name2">
				<td>{{index}}</td>
				<td>{{name2}}</td>
				<td>
					<button class="btn btn-sm bg-primary text-white"
						@click="handleClick(name2)">
						Select
					</button>
				</td>
			</tr>
		</table>
		<p></p>
		<h4 class="bg-primary text-white text-center m-2 p-2">
			엘리먼트 내에서 여러 이벤트 처리
		</h4>
		<h3 class="bg-primary text-white text-center mt-2 p-2">
			{{message}}
		</h3>
		<table class="table table-sm table-striped table-bordered">
			<tr>
				<th>Index</th><th>Name</th><th>Actions</th>
			</tr>
			<tr v-for="(name2, index) in names" :key="name2">
				<td>{{index}}</td>
				<td>{{name2}}</td>
				<td>
					<button class="btn btn-sm bg-primary text-white"
						@click="handleClick(name2)"
						@mousemove="handleMouseEvent(name2, $event)"
						@mouseleave="handleMouseEvent(name2, $event)">
						Select
					</button>
				</td>
			</tr>
		</table>
		<p></p>
		<h4 class="bg-primary text-white text-center m-2 p-2">
			엘리먼트 내에서 여러 이벤트 처리2
		</h4>
		<h3 class="bg-primary text-white text-center mt-2 p-2">
			{{message}}
		</h3>
		<table class="table table-sm table-striped table-bordered">
			<tr>
				<th>Index</th><th>Name</th><th>Actions</th>
			</tr>
			<tr v-for="(name2, index) in names" :key="name2">
				<td>{{index}}</td>
				<td>{{name2}}</td>
				<td>
					<button class="btn btn-sm bg-primary text-white"
						v-on="buttonEvents"
						:data-name="name2"
						data-action="laugh">
						Select
					</button>
				</td>
			</tr>
		</table>
		<p></p>
		<h4 class="bg-primary text-white text-center m-2 p-2">
			이벤트 전달(Event Bubble Phase)
		</h4>
		<div class="bg-primary p-4 text-white h3"
			id="outer-element"
			@click="handleClick3">
			Outer Element
			<div class="bg-secondary p-4"
				id="middle-element"
				@click="handleClick3">
				Middle Element
				<div class="bg-info p-4" id="inner-element"
					@click="handleClick3">
					Inner Element
				</div>
			</div>
		</div>
		<h4 class="bg-primary text-white text-center m-2 p-2">
			이벤트 전달 (Event Capture Phase) capture
		</h4>
		<div class="bg-primary p-4 text-white h3"
			id="outer-element"
			@click.capture="handleClick3">
			Outer Element
			<div class="bg-secondary p-4"
				id="middle-element"
				@click.capture="handleClick3">
				Middle Element
				<div class="bg-info p-4" id="inner-element"
					@click.capture="handleClick3">
					Inner Element
				</div>
			</div>
		</div>
		<h4 class="bg-primary text-white text-center m-2 p-2">
			타겟 단계 이벤트만 처리 self
		</h4>
		<div class="bg-primary p-4 text-white h3"
			id="outer-element"
			@click="handleClick3">
			Outer Element
			<div class="bg-secondary p-4"
				id="middle-element"
				@click.self="handleClick3">
				Middle Element
				<div class="bg-info p-4" id="inner-element"
					@click="handleClick3">
					Inner Element
				</div>
			</div>
		</div>
		<h4 class="bg-primary text-white text-center m-2 p-2">
			이벤트 전달 막기 stop
		</h4>
		<div class="bg-primary p-4 text-white h3"
			id="outer-element"
			@click="handleClick3">
			Outer Element
			<div class="bg-secondary p-4"
				id="middle-element"
				@click.stop="handleClick3">
				Middle Element
				<div class="bg-info p-4" id="inner-element"
					@click="handleClick3">
					Inner Element
				</div>
			</div>
		</div>
		<h4 class="bg-primary text-white text-center m-2 p-2">
			이벤트 한번만 실행하기 once
		</h4>
		<div class="bg-primary p-4 text-white h3"
			id="outer-element"
			@click="handleClick3">
			Outer Element
			<div class="bg-secondary p-4"
				id="middle-element"
				@click="handleClick3">
				Middle Element
				<div class="bg-info p-4" id="inner-element"
					@click.once="handleClick3">
					Inner Element
				</div>
			</div>
		</div>
		<h4 class="bg-primary text-white text-center m-2 p-2">
			마우스 이벤트 수정자 left, middle, right`
		</h4>
		<div class="bg-primary p-4 text-white h3"
			id="outer-element"
			@mousedown="handleClick3">
			Outer Element
			<div class="bg-secondary p-4"
				id="middle-element"
				@mousedown="handleClick3">
				Middle Element
				<div class="bg-info p-4" id="inner-element"
					@mousedown.right="handleClick3">
					Inner Element
				</div>
			</div>
		</div>
		<h4 class="bg-primary text-white text-center m-2 p-2">
			키보드 이벤트 수정자 enter, tab, delete, esc, space, up, down, left, right, ctrl, alt, shift, meta
		</h4>
		<div class="bg-primary p-4 text-white h3">
			{{message16}}
		</div>
		<input class="form-control bg-light" placeholder="Type here..."
			@keydown.ctrl="handleKey">
		<h4 class="bg-primary text-white text-center m-2 p-2">
			키보드 이벤트 수정자 exact
		</h4>
		<div class="bg-primary p-4 text-white h3">
			{{message16}}
		</div>
		<input class="form-control bg-light" placeholder="Type here..."
			@keydown.ctrl.exact="handleKey">
	</div>
</template>
<script>
export default {
	name: "MyComponent",
	data(){
		return {
			name: "Lifejacket",
			message: "Ready",
			names: ["Kayak", "Lifejacket", "Soccer Ball", "Stadium"],
			counter: 0,
			buttonEvents:{
				click: this.handleClick2,
				mousemove: this.handleMouseEvent2,
				mouseleave: this.handleMouseEvent2
			},
			message16: "Ready"
		}
	},
	methods:{
		handleEvent($event){
			this.name = $event.type
			console.log($event)
		},
		handleEvent2(name, $event){
			this.name = `${name} - ${$event.type}`
		},
		handleClick(name){
			this.message = `Select : ${name}`
		},
		handleMouseEvent(name, $event){
			if($event.type == "mousemove"){
				this.message = `Move in ${name} ${this.counter++}`
			}else{
				this.counter = 0
				this.message = "Ready"
			}
		},
		handleClick2($event){
			let name = $event.target.dataset.name
			this.message = `Select : ${name}`
			console.log($event)
		},
		handleMouseEvent2($event){
			let name = $event.target.dataset.name
			if($event.type == "mousemove"){
				this.message = `Move in ${name} ${this.counter++}`
			}else{
				this.counter = 0
				this.message = "Ready"
			}
		},
		handleClick3($event){
			console.log(`handleClick target: ${$event.target.id} currentTarget: ${$event.currentTarget.id}`)
		},
		handleKey($event){
			this.message16 = $event.key
		}
	}
}
</script>

