<script setup lang="ts">
import { ref, onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

const initialMap = ref<L.Map | null>(null);

onMounted(() => {
  initialMap.value = L.map("map").setView([23.8041, 90.4152], 6);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(initialMap.value as L.Map);
});
</script>

<template>
  <div>
    <h3>An interactive leaflet map</h3>
    <div id="map" style="height: 90vh"></div>
  </div>
</template>
