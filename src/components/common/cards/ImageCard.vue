<script setup lang="ts">
import imm from "@/assets/restaurantDefault.png";
const { slide, active } = defineProps<{
  active?: boolean;
  slide: any;
}>();

console.log(slide, active);
</script>

<template>
  <div class="bg-gray-900 rounded-xl">
    <div class="relative">
      <img
        class="object-cover h-56 md:h-96 w-72 rounded-xl"
        :class="!active ? 'opacity-60' : 'opacity-100'"
        :src="imm"
      />
      <div class="absolute z-10 bottom-0 text-md p-3 text-left">
        <p class="font-bold">Nombre shalala</p>
        <p>Direción</p>
      </div>
    </div>
  </div>
</template>
