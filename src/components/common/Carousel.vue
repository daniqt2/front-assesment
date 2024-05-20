<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import ImageCard from "@/components/common/cards/ImageCard.vue";
import { computed, onMounted, ref } from "vue";

// TODOD -> transform-origin: center XPX

// Could be helper - TODO
const elementsToShow = computed(() => {
  return screen.width <= 640 ? 1.8 : screen.width <= 760 ? 4 : 6;
});

const currentSlide = ref(2);

const { customComponent } = defineProps({
  customComponent: Object,
});
</script>

<template>
  <button @click="ooo">a</button>
  <Carousel
    :items-to-show="elementsToShow"
    :wrap-around="true"
    v-model="currentSlide"
  >
    <Slide v-for="(slide, idx) in 12" :key="slide">
      <component
        :is="customComponent"
        :slide="slide"
        :active="slide == currentSlide + 1"
      ></component>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style>
.carousel__item {
  min-height: 300px;
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__slide {
  padding: 5px;
}

.carousel__prev,
.carousel__next {
  background-color: white;
  color: black;
}
</style>
