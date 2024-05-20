<script setup lang="ts">
import StarIcon from "../icons/Star.icon.vue";
const { rate } = defineProps<{
  rate: number;
  fillColor?: string;
}>();
</script>

<template>
  <div class="flex">
    <StarIcon
      v-for="star in 5"
      :fill="star <= rate ? 'fill-tailorBlue stroke-tailorBlue' : 'fill-white'"
    ></StarIcon>
  </div>
</template>
