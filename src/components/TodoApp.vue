<template>
    <div>
        <div v-for="todo in todos" :key="todo.id" data-test="todo">
            {{ todo.text }}
        </div>
    </div>
  </template>
  
  <script>
  export default {
      name: 'HelloWorld',
     data() {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Learn vue Testing',
                    completed: false
                }
            ]
        }
     }
  }
  </script>
  
  <style>
  
  </style>
  