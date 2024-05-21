<script lang="ts" setup>
import MainLayout from "@/layouts/ColumnEnd.layout.vue";
import logoImage from "@/assets/Logo.png";
import svgIcon from "@/assets/Vector.svg";
import { useRouter } from "vue-router";
import { ERoutes } from "@/router/router.utils";
import { nextTick, ref } from "vue";
import SplashHomeComponent from "@/components/home/Splash.home.component.vue";
import TailorLogo from "@/components/common/icons/TailorLogo.vue";

const splashShowing = ref(true);

const router = useRouter();

const handleLogin = () => {
  router.push({ name: ERoutes.LOGIN });
};

const handleSlashHide = () => nextTick(() => (splashShowing.value = false));
</script>

<template>
  <SplashHomeComponent @hide="handleSlashHide" />
  <MainLayout v-if="!splashShowing">
    <template v-slot:left-column>
      <div class="bg-tailorMain p-6 rounded-lg text-black">
        <TailorLogo fill="fill-black" />
        <p class="text-md lg:text-lg my-5">
          Hola, <br />
          Bienvenido a la prueba de Tailor hub, en ella has de añadir los
          restaurantes favoritos donde te gustaría ir en tu onboarding.
        </p>
        <button class="button text-lg" @click="handleLogin">Entrar</button>
      </div>
    </template>
  </MainLayout>
</template>
