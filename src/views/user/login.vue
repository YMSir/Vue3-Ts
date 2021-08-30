<template>
  <div class="main">
    <a-form :model="userInfo" @submit="handleSubmit">
      <a-form-item>
        <a-input v-model:value="userInfo.username" size="large">
          <template #prefix>
            <UserOutlined class="icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-input-password v-model:value="userInfo.password" size="large">
          <template #prefix>
            <LockOutlined class="icon" />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item>
        <a-button
          :loading="isLogin"
          class="login-btn"
          html-type="submit"
          size="large"
        >
          登 录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { getToken } from '@/api/user';
import { useRouter } from 'vue-router';

type UserInfo = {
  username: string,
  password: string
}

const userInfo: UserInfo = reactive({
  username: 'Yes.Man',
  password: ''
});

const isLogin = ref(false);
const router = useRouter();

function handleSubmit (e: Event) {
  console.log(e);
  e.preventDefault();
  isLogin.value = true;

  getToken().then(res => {
    console.log(res);
    isLogin.value = false;
    router.replace('/user/list');
  });
}
</script>

<style lang="scss" scoped>
@import 'login';
</style>
