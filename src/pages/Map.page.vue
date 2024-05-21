<script setup lang="ts">
import MapSpace from "../views/map/MapSpace.view.vue";
import HeaderLayout from "@/layouts/Header.layout.vue";
</script>

<template>
  <HeaderLayout>
    <template v-slot:content><MapSpace /></template>
  </HeaderLayout>
</template>
