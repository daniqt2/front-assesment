<script setup lang="ts">
import { ref } from "vue";

const fileInput = ref<HTMLInputElement | null>(null);
const uploadedImg = ref<string | null>(null);

const triggerFileInput = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};

const emit = defineEmits<{
  (e: "load", image: string | null): void;
}>();

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const reader = new FileReader();
    const file = target.files[0];
    reader.onload = (e) => {
      uploadedImg.value = e.target?.result as string;
      emit("load", uploadedImg.value);
    };
    reader.readAsDataURL(file);
  }
};

const deleteImage = () => {
  uploadedImg.value = null;
  emit("load", null);
};
</script>

<template>
  <div
    class="h-full w-10/12 border border-black text-black rounded-xl flex relative cursor-pointer ml-auto mr-6 min-h-48"
    @click="triggerFileInput"
  >
    <p
      v-if="!uploadedImg"
      class="absolute inset-0 flex items-center justify-center z-10 text-black"
    >
      Subir foto
    </p>
    <div v-else class="absolute inset-0 flex items-center justify-center z-10">
      <button class="white-button text-white" @click="deleteImage">
        Eliminar foto
      </button>
    </div>
    <img
      v-if="uploadedImg"
      :src="uploadedImg"
      class="object-cover w-full h-full rounded-xl opacity-90"
    />
    <input
      type="file"
      ref="fileInput"
      class="hidden"
      @change="handleFileChange"
    />
  </div>
</template>
