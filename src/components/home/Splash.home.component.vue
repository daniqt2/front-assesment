<script setup lang="ts">
import { onMounted, ref } from "vue";
import image from "@/assets/Logo.png";

const showSplash = ref(true);
const emit = defineEmits<{
  (e: "hide"): void;
}>();

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false;
    emit("hide");
  }, 1000);
});
</script>

<template>
  <Transition name="fade" class="absolute bg-tailorMain">
    <div
      class="w-full h-full flex justify-center items-center"
      v-if="showSplash"
    >
      <img class="mx-auto" :src="image" alt="My Image" width="194" />
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
