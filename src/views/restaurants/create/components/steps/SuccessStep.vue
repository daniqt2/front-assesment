<script setup lang="ts">
const { text } = defineProps<{
  loading: boolean;
  text: { title: string; button: String };
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <div v-if="loading">LOADING</div>
  <div class="text-center py-8" v-else>
    <p class="text-tailorBlue font-bold text-md pb-6">{{ text.title }}</p>
    <button class="button text-black blue-hover" @click="emit('click')">
      {{ text.button }}
    </button>
  </div>
</template>
