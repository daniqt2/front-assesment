<script setup lang="ts">
import bgImage from "@/assets/RestaurantList.png";
import { useRouter } from "vue-router";
import { ERoutes } from "@/router/router.utils";
import NameCard from "@/components/common/cards/NameCard.vue";
import { useRestaurantStore } from "@/store/restaurant.store";
import { computed, onMounted, reactive, ref } from "vue";
import { storeToRefs } from "pinia";

const router = useRouter();

const restaurantStore = useRestaurantStore();
const { restaurants, totalRestaurants } = storeToRefs(restaurantStore);
const isLoading = ref(!restaurants.value.length);

const pagination = reactive({
  limit: 10,
  page: 1,
});

const goMapView = () => router.push({ name: ERoutes.MAP_VIEW });
const goCreate = () => router.push({ name: ERoutes.RESTAURANT_CREATE });

const getRestaurants = async () => {
  isLoading.value = true;
  restaurantStore.getRestaurants(pagination).then(() => {
    pagination.page += 1;
    isLoading.value = false;
  });
};

onMounted(() => {
  !restaurants.value.length && getRestaurants();
});

const goToDetail = (id: string) =>
  router.push({ name: ERoutes.RESTAURANT_DETAIL, params: { id } });

const showShowMore = computed(
  () => totalRestaurants.value > restaurants.value?.length
);
</script>

<template>
  <div class="w-full h-full flex-row p-4 md:p-8">
    <div class="bg-black text-center flex header-img rounded-xl relative">
      <img class="object-cover w-full h-full opacity-50" :src="bgImage" />
      <div class="absolute top-1/2 text-center w-full">
        <p class="font-bold text-lg md:text-2xl">
          LOS MEJORES RESTAURANTES DE LA ZONA
        </p>
        <p class="text-sm md:text-xl">disfruta de una variedad gastronómica</p>
      </div>
    </div>
    <div class="text-black font-bold py-4 text-lg">
      <div class="clickable" @click="goMapView">Ve al Mapa</div>
      <div class="clickable" @click="goCreate">Añadir restaurante</div>
    </div>
    <div class="text-black w-full text-center" v-if="isLoading">
      <p class="animate-pulse text-2xl">LOADING...</p>
    </div>
    <div class="px-4 lg:px-24 py-2 lg:py-8" v-if="restaurants.length">
      <div class="flex flex-col justify-end">
        <NameCard
          @click="() => goToDetail(restaurant._id)"
          v-for="(restaurant, idx) in restaurants"
          :key="`${idx}-rest`"
          :restaurant="restaurant"
        ></NameCard>
      </div>
      <div class="text-center py-4">
        <button
          v-if="showShowMore"
          class="button text-tailorBlue text-center hover:text-white hover:bg-tailorBlue"
          @click="getRestaurants"
        >
          <div class="animate-spin" v-if="isLoading">-</div>
          <p v-else>Load more</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.header-img {
  height: 45%;
}
</style>
