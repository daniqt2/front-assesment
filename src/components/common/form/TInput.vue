<script setup lang="ts">
const { label, field, type, placeholder, variant } = defineProps<{
  label: string;
  field: string;
  type?: string;
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
    <label :for="field" class="mb-2 font-bold">{{ label }}</label>
    <input
      autocomplete="false"
      :id="field"
      :type="type ?? 'text'"
      :name="field"
      :placeholder="placeholder ?? ''"
      class="input"
      @input="updateValue"
    />
    <p v-if="error" class="text-red-100">{{ error }}</p>
  </div>
</template>
