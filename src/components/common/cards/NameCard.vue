<script setup lang="ts">
import { IRestaurant } from "@/interfaces/Restaurant.interface";
import RateBar from "../rate/RateBar.vue";

const { restaurant } = defineProps<{
  restaurant: IRestaurant;
}>();
const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <div @click="emit('click')" class="container hoverable">
    <div class="sm:w-1/5 text-2xl sm:mr-8 font-bold">
      <div>
        <div class="bg-white inline-block bg-opacity-20 p-1">
          <RateBar :rate="restaurant.avgRating"></RateBar>
        </div>
      </div>
      {{ restaurant.name }}
    </div>

    <div class="text-sm self-center">{{ restaurant.address }}</div>
  </div>
</template>

<style scoped>
.container {
  @apply flex-row sm:flex p-4 py-12 text-black border border-x-0 border-t-0 border-b-tailorBlue;
}

.hoverable {
  @apply hover:shadow-lg hover:cursor-pointer hover:bg-tailorBlue hover:text-white rounded-md;
}
</style>
