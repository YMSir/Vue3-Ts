<template>
  <div class="login-bg"></div>
</template>

<script lang="ts" setup>
function getUser (ss: string) {
  return { ss };
}

const { ss } = getUser('ss');
console.log(ss);
</script>

<style scoped>
</style>
