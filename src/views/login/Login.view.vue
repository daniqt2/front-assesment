<script lang="ts" setup>
import { useRouter } from "vue-router";
import MainLayout from "../../layouts/Main.layout.vue";
import LoginForm from "./components/LoginForm.login.vue";
import { ERoutes } from "@/router/router.utils";
import TailorLogo from "@/components/common/TailorLogo.vue";

const router = useRouter();

const goRegister = () => router.push({ name: ERoutes.REGISTER });
</script>

<template>
  <MainLayout image="Login">
    <template v-slot:left-column>
      <div class="bg-tailorBlue p-6 rounded-lg text-white">
        <TailorLogo fill="fill-white" />
        <p
          class="text-light my-8 text-sm hover:cursor-pointer hover:font-bold"
          @click="goRegister"
        >
          ¿No tienes cuenta? Regístrate
        </p>
        <LoginForm />
      </div>
    </template>
  </MainLayout>
</template>
