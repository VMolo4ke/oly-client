<template>
  <button class="ui-button"><slot /></button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.ui-button {
  padding: 12px;
  background: $bg-btn;
  border-radius: 12px;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
  }
}
</style>
