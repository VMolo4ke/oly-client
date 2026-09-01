<template>
  <div class="auth-form">
    <div class="auth-form__form">
      <CommonInput v-model="form.name" placeholder="Никнеймчик"></CommonInput>
      <CommonInput v-model="form.email" placeholder="Email"></CommonInput>
      <CommonInput v-model="form.password" placeholder="Пароль"></CommonInput>
      <CommonButton @click="register" class="auth-form__btn"
        >Зарегистрироваться</CommonButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import CommonButton from "../common/CommonButton.vue";
import CommonInput from "../common/CommonInput.vue";
import axios from "axios";

const form = reactive({
  name: "",
  email: "",
  password: "",
});

async function register() {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/sign-up",
      form,
    );

    console.log("Пользователь создан:", response.data);
  } catch (error) {
    console.error("Ошибка Axios:", error.response?.data);
  }
}
</script>

<style lang="scss" scoped>
.auth-form {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;

  &__form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 600px;
    padding: 20px;
    border-radius: 8px;
    background: #0f0f0f;
  }

  &__btn {
    width: max-content;
  }
}
</style>
