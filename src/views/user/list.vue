<template>
  <h3>user list</h3>
  <ul class="list">
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

const userList = ref<User[]>([]);
getToken().then(res => {
  userList.value = res.data.array;
  console.log(res.data.array);
  console.log(userList.value);
});
</script>

<style lang="scss" scoped>
@import "list";
</style>
