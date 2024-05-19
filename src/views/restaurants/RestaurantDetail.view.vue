<script setup lang="ts">
import NameCard from "../../components/common/cards/NameCard.vue";
</script>

<template>
  <div class="w-full h-full flex-row p-8">
    <div class="bg-red-100 text-center flex header-img rounded-xl">
      <div class="m-auto">
        <p>Nombre de restau</p>
        <p>shalala</p>
      </div>
    </div>
    <div class="grid grid-cols-3 sm:grid-cols-3 px-4 lg:px-24 py-2 lg:py-8">
      <div class="col-span-3 sm:col-span-2 flex flex-col justify-end">
        <div class="text-black mb-8">
          Lorem ipsum dolor sit amet consectetur. At vel elementum amet est
          nulla cras turpis. Fringilla ornare massa eu a sollicitudin vestibulum
          auctor risus. Elementum quam sit neque quis. A vestibulum consectetur
          tincidunt vitae.Lorem ipsum dolor sit amet consectetur. At vel
          elementum amet est nulla cras turpis. Fringilla ornare massa eu a
          sollicitudin vestibulum auctor risus. Elementum quam sit neque quis. A
          vestibulum consectetur tincidunt vitae.Lorem ipsum dolor sit amet
          consectetur. At vel elementum amet est nulla cras turpis. Fringilla
          ornare massa eu a sollicitudin vestibulum auctor risus. Elementum quam
          sit neque quis. A vestibulum consectetur tincidunt vitae.
        </div>
        <NameCard></NameCard>
        <NameCard></NameCard>
        <NameCard></NameCard>
      </div>
      <div class="col-span-3 sm:col-span-1 flex flex-col justify-end">aaaa</div>
    </div>
  </div>
</template>

<style>
.header-img {
  height: 45%;
}
</style>
