<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { computed, ref, watch } from "vue";

// TODOD -> transform-origin: center XPX ???

const emit = defineEmits<{
  (e: "change", idx: number): void;
}>();

const elementsToShow = computed(() => {
  return screen.width <= 640 ? 1.8 : screen.width <= 760 ? 4 : 6;
});

const currentSlide = ref(2);

const { customComponent, dataList } = defineProps({
  customComponent: Object,
  dataList: Array,
});

watch(
  () => currentSlide.value,
  (newVal) => emit("change", newVal)
);
</script>

<template>
  <Carousel
    :items-to-show="elementsToShow"
    :wrap-around="true"
    v-model="currentSlide"
  >
    <Slide v-for="(slide, idx) in dataList" :key="`${idx}-slide`">
      <component
        :is="customComponent"
        :slide="slide"
        :active="idx == currentSlide"
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
