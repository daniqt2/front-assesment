<script setup lang="ts">
import RateBar from "@/components/common/rate/RateBar.vue";
import { useRestaurantStore } from "@/store/restaurant.store";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const comment = ref();
const rate = ref(0);

const restaurantStore = useRestaurantStore();
const { selectedRestaurant } = storeToRefs(restaurantStore);

const reset = () => {
  comment.value = null;
  rate.value = 0;
};

const handleSend = () => {
  console.log(comment.value);
  if (!selectedRestaurant.value?._id) return;
  restaurantStore
    .createComment(selectedRestaurant.value?._id, {
      comment: comment.value,
      rating: rate.value,
    })
    .then(reset);
};
const handleRate = (idx: number) => {
  rate.value = idx;
};
</script>

<template>
  <div class="border border-black text-black rounded-lg p-4">
    <RateBar :rate="rate" @click="handleRate" :active="true" />
    <textarea
      v-model="comment"
      class="text-area w-full py-4 text-xl m-2 p-2"
      placeholder="Escribe tu comentario sobre el restaurante"
    ></textarea>
    <button class="button font-bold text-lg blue-hover" @click="handleSend">
      Enviar
    </button>
  </div>
</template>
