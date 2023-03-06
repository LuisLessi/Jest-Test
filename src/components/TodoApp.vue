<template>
    <div>
        <div v-for="todo in todos" :key="todo.id" data-test="todo"
        :class="[todo.completed ? 'completed' : '']">
            {{ todo.text }}
            <input type="checkbox"
            v-model="todo.completed"
            data-test="todo-checkbox"/>
        </div>
    </div>

    <form data-test="form" @submit.prevent="createTodo">
        <input data-test="new-todo" type="text" v-model="newTodo">
        <button data-test="clear-button" @click="clearInput">Clear</button>
    </form>
  </template>
  
  <script>
  export default {
      name: 'HelloWorld',
     data() {
        return {
            newTodo: '',
            todos: [
                {
                    id: 1,
                    text: 'Learn vue Testing',
                    completed: false
                }
            ]
        }
     },

     methods: {
        createTodo(){
            this.todos.push({
                id: 2,
                text: this.newTodo,
                completed: false
            })
        },
        clearInput() {
        this.newTodo = '';
    }
     }
  }
  </script>
  
  <style>
 .completed {
    color: green;
}
  </style>
  