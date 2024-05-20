<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-screen w-full">
    <div class="flex-grow content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.content {
  height: 95vh;
  overflow: scroll;
}
</style>
