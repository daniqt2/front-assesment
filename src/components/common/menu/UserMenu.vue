<script setup lang="ts">
import arrow from "@/assets/icons/arrow-down.svg";
import { useUserStore } from "@/store/user.store";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
</script>

<template>
  <div class="ml-auto p-4 flex" v-if="user?.name">
    <div class="pb-2">
      <p class="text-black text-2xl mr-1">{{ user?.name }}</p>
    </div>
    <div>
      <img :src="arrow" alt="My Icon" class="w-6 h-8 pt-2" />
    </div>
  </div>
</template>
