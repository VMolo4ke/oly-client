<template>
  <div v-if="user" class="profile">
    <h1 class="profile__name">{{ user }}</h1>
  </div>
</template>

<script setup lang="ts">
const user = localStorage.getItem("user");
</script>

<style lang="scss" scoped></style>
