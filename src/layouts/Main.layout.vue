<script setup lang="ts">
const props = defineProps<{
  image?: string;
}>();
</script>

<template>
  <div
    class="h-full w-screen flex justify-center items-center overflow-hidden mb-12 md:mb-0"
  >
    <div
      class="h-full grid grid-cols-1 md:grid-cols-2 gap-4 p-6 flex-col-reverse"
    >
      <div
        class="col-span-1 md:col-span-1 flex flex-col justify-end row-start-2 md:row-start-1"
      >
        <slot name="left-column"></slot>
      </div>
      <div class="col-span-1 md:col-span-1 mb-0 flex flex-col justify-end">
        <slot name="right-column">
          <img
            class="mx-auto"
            :src="`/main/${props.image ?? 'Default'}.png`"
            alt="home im"
            width="100%"
            height="100%"
          />
        </slot>
      </div>
    </div>
  </div>
</template>
