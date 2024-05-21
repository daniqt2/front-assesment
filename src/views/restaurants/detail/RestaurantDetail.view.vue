<script setup lang="ts">
import { useRoute } from "vue-router";
import ReviewCard from "@/components/common/cards/ReviewCard.vue";
import HeroBanner from "@/components/common/banner/HeroBanner.vue";
import AddReview from "./components/AddReview.vue";
import { useRestaurantStore } from "@/store/restaurant.store";
import { onMounted, onUnmounted, ref } from "vue";
import { storeToRefs } from "pinia";

const { params } = useRoute();
const isLoading = ref(false);

const { getRestaurant } = useRestaurantStore();
const restaurantStore = useRestaurantStore();
const { selectedRestaurant } = storeToRefs(restaurantStore);

onMounted(() => {
  isLoading.value = true;
  const id = params.id as string;
  !selectedRestaurant.value &&
    getRestaurant(id).then(() => {
      isLoading.value = false;
    });
});

onUnmounted(() => {
  restaurantStore.clearSelected();
});
</script>

<template>
  <div class="w-full h-full flex-row p-8">
    <HeroBanner :image="selectedRestaurant?.image || ''" :loading="isLoading">
      <template v-slot:content>
        <p class="font-bold text-2xl">{{ selectedRestaurant?.name }}</p>
        <p>{{ selectedRestaurant?.address }}</p>
      </template>
    </HeroBanner>

    <div
      class="grid grid-cols-3 sm:grid-cols-3 gap-10 px-4 lg:px-24 py-2 lg:py-8"
    >
      <div class="col-span-3 sm:col-span-2 flex flex-col">
        <div
          class="text-black mb-8"
          :class="{
            'text-gray-500 font-light': selectedRestaurant?.description?.length,
          }"
        >
          {{ selectedRestaurant?.description ?? "Aún no tiene descripción" }}
        </div>
        <div v-if="selectedRestaurant?.reviews.length">
          <ReviewCard
            v-for="(review, idx) in selectedRestaurant?.reviews"
            :review="review"
            :key="`${idx}-review`"
          ></ReviewCard>
        </div>
        <p
          v-else
          class="text-black font-bold text-lg border-b border-tailorBlue py-8 mt-2"
        >
          Se el primero en dejar una opinión!
        </p>
      </div>
      <div class="col-span-3 sm:col-span-1 flex flex-col">
        <AddReview></AddReview>
      </div>
    </div>
  </div>
</template>

<style>
.header-img {
  height: 45%;
}
</style>
