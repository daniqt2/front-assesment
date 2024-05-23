<script setup lang="ts">
import Alert from './components/common/popOver/Alert.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen w-full">
    <Alert/>
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
