<script setup lang="ts">
import arrow from "@/assets/icons/arrow-down.svg";
import { ERoutes } from "@/router/router.utils";
import { useUserStore } from "@/store/user.store";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const menuIsOpen = ref(false);

const goCreate = () => router.push({ name: ERoutes.RESTAURANT_CREATE });

const handleLogout = () => {
  userStore.logout();
  router.push({ name: ERoutes.LOGIN });
};
</script>

<template>
  <div class="ml-auto p-4 relative w-52" v-if="user?.name">
    <div
      class="flex float-right cursor-pointer"
      @click="menuIsOpen = !menuIsOpen"
    >
      <img :src="arrow" alt="My Icon" class="w-6 h-8 pt-2" />
      <p class="text-black text-2xl mr-1">{{ user?.name }}</p>
    </div>
    <div
      v-if="menuIsOpen"
      class="bg-tailorBlue absolute bottom-0 left-0 p-8 translate-y-full z-10 rounded-2xl rounded-tr-none grow-left"
    >
      <p class="text-lg mb-6">Panel de control</p>
      <div class="clickable mb-6 text-md" @click="goCreate">
        Añadir restaurante
      </div>
      <button class="white-button" @click="handleLogout">Cerrar sesión</button>
    </div>
  </div>
</template>

<style scoped></style>
