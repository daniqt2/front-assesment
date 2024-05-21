<script setup lang="ts">
const props = defineProps<{
  image?: string;
}>();
</script>

<template>
  <div
    class="flex flex-col-reverse justify-start md:flex-row p-4 content-center"
  >
    <div class="col">
      <div class="p-4 w-full"><slot name="left-column"></slot></div>
    </div>
    <div class="col">
      <div class="p-4 w-full"><slot name="right-column"></slot></div>
    </div>
  </div>
</template>

<style>
.col {
  @apply md:w-1/2 flex justify-center;
}
</style>
