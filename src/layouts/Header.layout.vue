<script setup lang="ts">
import UserMenu from "@/components/common/menu/UserMenu.vue";
import { ERoutes } from "@/router/router.utils";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => router.back();
</script>
<template>
  <div class="h-screen">
    <div class="w-full flex">
      <button
        class="text-black p-4 hover:cursor-pointer hover:text-tailorBlue"
        @click="goBack"
      >
        B a c k
      </button>
      <UserMenu />
    </div>
    <div class="h-full w-full">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style>
.container {
  height: 80%;
}
</style>
