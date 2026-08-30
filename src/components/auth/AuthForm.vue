<template>
  <div class="auth-form">
    <CommonInput placeholder="Никнеймчик"></CommonInput>
    <CommonInput placeholder="Email"></CommonInput>
    <CommonInput placeholder="Пароль"></CommonInput>
  </div>
</template>

<script setup lang="ts">
import CommonInput from "../common/CommonInput.vue";
</script>

<style lang="scss" scoped>
.auth-form {
  max-width: 400px;
  padding: 20px;
  border-radius: 8px;
  background: #0f0f0f;
}
</style>
