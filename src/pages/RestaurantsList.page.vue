<script setup lang="ts">
import RestaurantList from "@/views/restaurants/list/RestaurantList.view.vue";
import HeaderLayout from "@/layouts/Header.layout.vue";
</script>

<template>
  <HeaderLayout>
    <template v-slot:content><RestaurantList></RestaurantList></template>
  </HeaderLayout>
</template>
