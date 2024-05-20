<script lang="ts" setup>
import { useRouter } from "vue-router";
import MainLayout from "../../layouts/Main.layout.vue";
import LoginForm from "./components/LoginForm.login.vue";
import { ERoutes } from "@/router/router.utils";
import TailorLogo from "@/components/common/icons/TailorLogo.vue";
import { ILoginParams } from "@/services/auth.service";
import { useUserStore } from "@/store/user.store";
import { ref, watch } from "vue";

const router = useRouter();
const { login } = useUserStore();

const isLoading = ref(false);
const error = ref(false);

const goRegister = () => router.push({ name: ERoutes.REGISTER });

const showError = () => {
  error.value = true;
  setTimeout(() => (error.value = false), 2000);
};

const handleRegister = (loginParams: ILoginParams) => {
  isLoading.value = true;
  login(loginParams)
    .then((res) => {
      if (res) router.push({ name: ERoutes.RESTAURANT_LIST });
      isLoading.value = false;
    })
    .catch(showError);
};
</script>

<template>
  <MainLayout image="Login">
    <template v-slot:left-column>
      <div class="bg-tailorBlue p-6 rounded-lg text-white w-full">
        <TailorLogo fill="fill-white" />
        <p
          class="text-light my-8 text-sm hover:cursor-pointer hover:font-bold"
          @click="goRegister"
        >
          ¿No tienes cuenta? Regístrate
        </p>

        <p class="font-bold text-red-100 py-2" v-if="error">
          HUBO UN PROBLEMA!! Intentalo de nuevo!!!
        </p>
        <LoginForm @login="handleRegister" :loading="isLoading" />
      </div>
    </template>
  </MainLayout>
</template>
