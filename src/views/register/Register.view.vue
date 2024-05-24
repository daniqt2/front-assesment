<script lang="ts" setup>
import MainLayout from "../../layouts/ColumnEnd.layout.vue";
import RegisterForm from "./components/RegisterForm.register.vue";
</script>

<template>
  <MainLayout image="Login">
    <template v-slot:left-column>
      <div class="bg-tailorBlue p-6 rounded-lg text-white">
        <RegisterForm />
      </div>
    </template>
  </MainLayout>
</template>
