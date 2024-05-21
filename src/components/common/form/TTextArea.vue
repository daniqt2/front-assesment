<script setup lang="ts">
const { label, field, type, placeholder, variant } = defineProps<{
  label: string;
  field: string;
  placeholder?: string;
  error?: string;
  variant?: string;
}>();

const model = defineModel();

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  model.value = target.value;
};
</script>

<template>
  <div class="field" :class="variant ?? 'input-primary'">
    <label :for="field" class="mb-2">{{ label }}</label>
    <textArea
      :id="field"
      :name="field"
      :placeholder="placeholder ?? ''"
      class="bg-transparent text-area rounded-smbg-transparent border rounded-md p-2"
      autocomplete="off"
      @input="updateValue"
    ></textArea>
    <p v-if="error" class="text-red-100">{{ error }}</p>
  </div>
</template>
