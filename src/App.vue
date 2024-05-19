<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex-grow content">
      <RouterView />
    </div>

    <footer class="text-gray-800 text-left py-4 px-6">
      Prueba técnica ©Tailor hub SL 2019 - 2024
    </footer>
  </div>
</template>

<style scoped>
.content {
  height: 95vh;
  overflow: scroll;
}
</style>
