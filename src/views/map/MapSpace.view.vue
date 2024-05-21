<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import Carousel from "@/components/common/Carousel.vue";
import ImageCard from "@/components/common/cards/ImageCard.vue";
import UserMenu from "@/components/common/menu/UserMenu.vue";
import { useRestaurantStore } from "@/store/restaurant.store";
import { storeToRefs } from "pinia";
import { LatLngExpression } from "leaflet";

const customMap = ref<L.Map>();

const restaurantStore = useRestaurantStore();
const { restaurants } = storeToRefs(restaurantStore);

onMounted(() => {
  const tailor: LatLngExpression = [40.42742000960579, -3.697411188568871];
  customMap.value = L.map("map").setView(tailor, 80);

  if (!restaurants.value.length) restaurantStore.getRestaurants();
  else {
    restaurants.value.forEach((res) =>
      L.marker([res.latlng.lat, res.latlng.lng]).addTo(customMap.value as L.Map)
    );
  }

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(customMap.value);
});

const handleChange = (idx: number) => {
  const coord = restaurants.value[idx]?.latlng;
  const position: LatLngExpression = [coord.lat, coord.lng];
  (customMap.value as L.Map).setView(position, 100);
};
</script>

<template>
  <div class="p-4 rounded-lg">
    <div id="map" class="top-0 z-0"></div>
    <div class="mt-4 absolute bottom-0 z-2">
      <Carousel
        :customComponent="ImageCard"
        :dataList="restaurants"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<style>
.leaflet-layer,
.leaflet-control-zoom-in,
.leaflet-control-zoom-out,
.leaflet-control-attribution {
  filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);
}

#map {
  height: 85vh;
  border-radius: 14px;
}
</style>
