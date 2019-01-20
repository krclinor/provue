<template>
  <div id="app">
    <h4 class="bg-primary text-white text-center p-2">
      {{name}}의 To Do List
    </h4>
    <div class="container-fluid p-4">
      <div class="row" v-if="filteredTasks.length == 0">
        <div class="col text-center">
          <b>할일 없음!!</b>
        </div>
      </div>
      <template v-else>
        <div class="row">
          <div class="col font-weight-bold">작업</div>
          <div class="col-2 font-weight-bold">완료</div>
        </div>
        <div class="row" v-for="t in filteredTasks" :key="t.action">
          <div class="col"> {{t.action}} </div>
          <div class="col-2 text-center">
            <input type="checkbox" v-model="t.done" class="form-check-input"/>
            {{t.done}}
          </div>
        </div>
      </template>
      <div class="row py-2">
        <div class="col">
        <input v-model="newItemText" class="form-control" />
        </div>
        <div class="col-2">
          <button class="btn btn-primary" @click="addNewTodo">추가</button>
        </div>
      </div>
      <div class="row bg-secondary py-2 mt-2 text-white">
        <div class="col text-center">
          <input type="checkbox" v-model="hideCompleted" class="form-check-input"/>
          <label class="form-check-label font-weight-bold">
            완료된 작업 감추기
          </label>
        </div>
      </div>
      <div class="col text-center">
        <button class="btn btn-sm btn-warning"
          @click="deleteCompleted">
          완료건 삭제
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      name: "리노",
      tasks: [],
      hideCompleted: true,
      newItemText:""
    }
  },
  computed: {
    filteredTasks(){
      return this.hideCompleted ?
        this.tasks.filter(t => !t.done) : this.tasks
    }
  },
  methods: {
    addNewTodo(){
      this.tasks.push({action: this.newItemText, done: false})
      this.storeData()
      this.newItemText = ""
    },
    storeData(){
      localStorage.setItem("todos", JSON.stringify(this.tasks))
    },
    deleteCompleted(){
      this.tasks = this.tasks.filter(t => !t.done)
      this.storeData()
    }
  },
  created() {
    let data = localStorage.getItem("todos")
    if(data != null){
      this.tasks = JSON.parse(data)
    }
  },
}
</script>
