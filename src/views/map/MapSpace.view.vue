<script setup lang="ts">
import { ref, onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import Carousel from "@/components/common/Carousel.vue";
import ImageCard from "@/components/common/cards/ImageCard.vue";
import UserMenu from "@/components/common/menu/UserMenu.vue";

const initialMap = ref<L.Map | null>(null);

onMounted(() => {
  initialMap.value = L.map("map").setView(
    [40.42742000960579, -3.697411188568871],
    80
  );
  L.marker([40.42623253007991, -3.6965539089861665]).addTo(initialMap.value);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(initialMap.value);
});
</script>

<template>
  <div class="p-4 rounded-lg">
    <UserMenu />
    <div id="map" class="top-0 z-0"></div>
    <div class="mt-4 absolute bottom-0 z-2">
      <Carousel :customComponent="ImageCard" />
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
