<template>
    <nav>
        <a id="home">Home</a>
        <a v-if="isLoggedIn" id="profile">My profile</a>
    </nav>
  </template>
  
  <script>
  export default {
      name: 'Nav',
      data(){
        return{
            isLoggedIn: false,
        }
      }
  }
  </script>
  
  <style>
  
  </style>
  