<template>
  <h3>user list</h3>
  <p>{{ $store.state.permission.counter }}</p>
  <ul class="list">
    <li
      v-for="user in userList"
      :key="user.id"
    >
      <h3>name: {{ user.name }}</h3>
      <h5>age: {{ user.age }}</h5>
      <h5>addr: {{ user.addr }}</h5>
      <h5>birth: {{ user.birth }}</h5>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getUserList } from '@/api/user';
import { useStore } from 'vuex';

defineProps({
  title: {
    type: String,
    default: 'this is a title.'
  }
});

const res = await getUserList();
const userList = ref<User[]>(res.data);

const store = useStore();
console.log(store.state.value);
console.log(store);
</script>

<style lang="scss" scoped>
@import './list.scss';
</style>
