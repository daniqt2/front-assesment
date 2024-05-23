<script setup lang="ts">
import { Emitter, EventType } from "mitt";
import { inject, ref } from "vue";

const emitter = inject("emitter") as Emitter<Record<EventType, unknown>>;

const error = ref();
const isActive = ref(false);

const showError = (e: unknown) => {
  isActive.value = true;
  error.value = e;
  setTimeout(() => {
    isActive.value = false;
  }, 4000);
};

emitter.on("error", showError);
</script>

<template>
  <Transition name="slide-right">
    <div class="absolute right-0 bottom-0 py-12" v-if="isActive">
      <div class="bg-red-500 p-4 pr-32">
        {{ error.error ?? "Hubo un error, intentalo de nuevo" }}
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.5s;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

.slide-right-enter-to,
.slide-right-leave-from {
  transform: translateX(0);
}
</style>
