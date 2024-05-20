<script setup lang="ts">
import { useUserStore } from "@/store/user.store";

const { user } = useUserStore();
</script>

<template>
  <div class="w-full relative h-16">
    <div class="absolute top-0 right-0 p-4">
      <p class="text-black">{{ user?.name }}</p>
    </div>
  </div>
</template>
