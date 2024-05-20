<script setup lang="ts">
const { label, field, type, placeholder } = defineProps<{
  label: string;
  field: string;
  type?: string;
  placeholder?: string;
}>();

const model = defineModel();

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  model.value = target.value;
};
</script>

<template>
  <div class="field">
    <label :for="field" class="mb-2">{{ label }}</label>
    <input
      :id="field"
      :type="type ?? 'text'"
      :name="field"
      :placeholder="placeholder ?? ''"
      class="input text-white"
      @input="updateValue"
    />
  </div>
</template>
