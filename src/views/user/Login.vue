<template>
  <div class="container">
    <div class="top">
      <div class="header">
        Vue3 + Vite + Ts + Ant
      </div>

      <div class="desc">
        This is a Vue3 Composition API project.
      </div>
    </div>

    <div class="main">
      <a-form :model="userInfo" @submit="handleSubmit">
        <a-form-item>
          <a-input v-model:value="userInfo.username" size="large">
            <template #prefix>
              <user-outlined class="icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item>
          <a-input-password v-model:value="userInfo.password" size="large">
            <template #prefix>
              <lock-outlined class="icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-button
            :loading="isLogin"
            class="login-btn"
            ghost
            html-type="submit"
            size="large"
            type="primary"
          >登 录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup >
import { reactive, ref } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

type UserInfo = {
  username: string,
  password: string
}

const userInfo: UserInfo = reactive({
  username: 'Yes.Man',
  password: ''
});

const isLogin = ref(false);

function handleSubmit (e: Event) {
  console.log(e);
  e.preventDefault();
  isLogin.value = true;

  setTimeout(() => {
    isLogin.value = false;
  }, 1500);
}
</script>

<style scoped>
@import './Login.scss';
</style>
