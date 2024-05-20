<script setup lang="ts">
import { IRestaurant } from "@/interfaces/Restaurant.interface";
import { ERoutes } from "@/router/router.utils";
import { useRouter } from "vue-router";
const { slide, active } = defineProps<{
  active?: boolean;
  slide: IRestaurant;
}>();

const router = useRouter();

const goToDetail = () => {
  router.push({ name: ERoutes.RESTAURANT_DETAIL, params: { id: slide._id } });
};
</script>

<template>
  <div class="bg-gray-900 rounded-xl hover:cursor-pointer" @click="goToDetail">
    <div class="relative">
      <img
        class="object-cover h-56 md:h-96 w-72 rounded-xl"
        :class="!active ? 'opacity-40' : 'opacity-100'"
        :src="slide.image"
      />
      <div class="absolute z-10 bottom-0 text-md p-3 text-left">
        <p class="font-bold">{{ slide.name }}</p>
        <p>{{ slide.address }}</p>
      </div>
    </div>
  </div>
</template>
