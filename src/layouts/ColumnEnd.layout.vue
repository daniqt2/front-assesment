<script setup lang="ts">
const { image } = defineProps<{
  image?: string;
}>();
</script>

<template>
  <div class="flex flex-col-reverse md:flex-row h-screen p-4">
    <div class="md:w-1/2 flex justify-center items-end">
      <div class="p-4 w-full"><slot name="left-column"></slot></div>
    </div>
    <div class="md:w-1/2 flex justify-center items-end">
      <div class="h-full w-full p-4 flex justify-center items-end">
        <img
          class="w-full h-full object-cover rounded-xl"
          :src="`/main/${image ?? 'Default'}.png`"
          alt="home im"
        />
      </div>
    </div>
  </div>
</template>
