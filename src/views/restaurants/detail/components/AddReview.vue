<script setup lang="ts">
import RateBar from "@/components/common/rate/RateBar.vue";
</script>

<template>
  <div class="border border-black text-black rounded-lg p-4">
    <RateBar :rate="0" />
    <p class="text-xl py-4">Escribe tu comentario sobre el restaurante</p>
    <button class="button font-bold text-lg blue-hover">Enviar</button>
  </div>
</template>
