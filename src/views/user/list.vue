<template>
  <h3>user list</h3>
  <ul>
    <li v-for="user in userList" :key="user.id">
      <h3>name: {{ user.name }}</h3>
      <h5>age: {{ user.age }}</h5>
      <h5>addr: {{ user.addr }}</h5>
      <h5>birth: {{ user.birth }}</h5>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getToken } from '@/api/user';

// console.log(await getToken());
const userList = ref([]);
userList.value = (await getToken()).data;
console.log(userList.value);

</script>

<style scoped>

</style>
