<script setup lang="ts">
import StarIcon from "../icons/Star.icon.vue";
const { rate } = defineProps<{
  rate: number;
  fillColor?: string;
  active?: boolean;
}>();

const emit = defineEmits<{
  (e: "click", idx: number): void;
}>();
</script>

<template>
  <div class="flex">
    <div
      v-for="(star, idx) in 5"
      @click="active ? emit('click', idx + 1) : undefined"
      :class="{ 'cursor-pointer': active }"
    >
      <StarIcon
        :fill="
          star <= rate ? 'fill-tailorBlue stroke-tailorBlue' : 'fill-white'
        "
      ></StarIcon>
    </div>
  </div>
</template>
