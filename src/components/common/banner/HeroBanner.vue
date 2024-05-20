<script setup lang="ts">
const { image } = defineProps<{
  image: string;
  loading?: boolean;
}>();
</script>

<template>
  <div
    class="text-center flex header-img rounded-xl relative"
    :class="loading ? 'bg-tailorBlue animate-pulse' : 'bg-black'"
  >
    <Transition name="fade">
      <img
        v-if="!loading"
        class="object-cover w-full h-full opacity-50 rounded-xl"
        :src="image"
      />
    </Transition>
    <div class="absolute top-1/2 text-center w-full">
      <div v-if="loading" key="loading">L O A D I N G</div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
