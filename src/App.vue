<template>
  <!--<img alt="Vue logo" src="./assets/logo.png" />-->
  <!--<HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />-->
  <Login></Login>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Login from './views/user/Login.vue';

export default defineComponent({
  name: 'App',
  components: {
    Login,
    HelloWorld
  }
})
</script>
