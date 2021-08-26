<template>
  <div class="container">
    <div class="top">
      <div class="header">
        Vue3 + Vite + Ts + Ant
      </div>

      <div class="desc">
        This is a Vue3 Composition API Project.
      </div>
    </div>

    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';

</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
