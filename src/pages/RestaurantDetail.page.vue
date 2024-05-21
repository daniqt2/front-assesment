<script setup lang="ts">
import RestaurantView from "../views/restaurants/detail/RestaurantDetail.view.vue";
import HeaderLayout from "@/layouts/Header.layout.vue";
</script>

<template>
  <HeaderLayout>
    <template v-slot:content><RestaurantView /></template>
  </HeaderLayout>
</template>
