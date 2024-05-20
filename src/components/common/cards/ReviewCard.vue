<script setup lang="ts">
import { IReview } from "@/interfaces/Restaurant.interface";
import RateBar from "@/components/common/rate/RateBar.vue";

const { review } = defineProps<{
  review?: IReview;
}>();
</script>

<template>
  <div class="ml-auto pt-2">
    <RateBar :rate="review?.rating || 0"></RateBar>
  </div>
  <div
    class="flex-row sm:flex p-4 pb-8 text-black border border-x-0 border-t-0 border-b-tailorBlue"
  >
    <div class="w-full sm:w-1/4 text-xl sm:mr-12 font-bold">
      {{ review?.owner.name }}
    </div>
    <div class="text-sm">
      {{ review?.comment }}
    </div>
  </div>
</template>
