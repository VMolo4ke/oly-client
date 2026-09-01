<template>
  <button class="ui-button"><slot /></button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.ui-button {
  padding: 12px;
  background: #000;
  border-radius: 12px;
  color: #fff;
  border: 1px solid #fff;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #fff;
  }
}
</style>
