<template>
  <div class="auth-form">
    <img src="@/assets/img/bg-auth.jpg" class="auth-form__img" />
    <div class="auth-form__form">
      <h1 class="auth-form__title">Регистрация</h1>
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
    console.error("Ошибка Axios:", error);
  }
}
</script>

<style lang="scss" scoped>
.auth-form {
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
  min-height: 100vh;
  width: 100%;

  &__img {
    position: absolute;
    top: 0;
    left: 0;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 600px;
    padding: 20px;
    width: 33%;
  }

  &__title {
    @include h1;

    color: #fff;
  }

  &__btn {
    width: 33;
  }
}
</style>
