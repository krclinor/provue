<template>
  <div id="app">
    <h4 class="bg-primary text-white text-center p-2">
      Adam's To Do List
    </h4>

    <table class="table table-striped table-bordered table-sm">
      <thead>
        <tr><th>작업</th><th>완료여부</th></tr>
      </thead>
      <tbody>
        <tr v-for="t in tasks" :key="t.action">
          <td>{{t.action}}</td>
          <td>{{t.done}}</td>
        </tr>
      </tbody>
    </table>

    <div class="form-group m-2">
      <label>New Item:</label>
      <input type="text" class="form-control" v-model="newItemText">
    </div>
    <div class="text-center">
      <button class="btn btn-primary" @click="addNewTodo">추가</button>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return {
      tasks: [
        {action: "Buy Flowers", done: false},
        {action: "Get Shoes", done: false},
        {action: "Collect Tickets", done: true},
        {action: "Call Joe", done: false},
      ],
      newItemText:""
    }
  },
  methods:{
    addNewTodo(){
      this.tasks.push({
        action: this.newItemText,
        done: false
      })
      this.newItemText = ""
    }
  }
}
</script>