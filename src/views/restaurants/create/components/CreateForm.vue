<script setup lang="ts">
import Input from "@/components/common/form/TInput.vue";
import TextArea from "@/components/common/form/TTextArea.vue";
import { useField } from "vee-validate";
import { ICreateFields } from "./steps/FormStep.vue";

const { disabled } = defineProps<{
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "save", formData: Partial<ICreateFields>): void;
}>();

const { value: name } = useField("name", "required");
const { value: description } = useField("description", "required");
const { value: address } = useField("address", "required");
</script>

<template>
  <div>
    <Input
      label="Nombre del restaurante"
      field="name"
      type="text"
      placeholder="Nombre del restaurante"
      v-model="name"
      variant="input-secondary"
    />
    <Input
      label="Dirección del restaurante"
      field="description"
      placeholder="Dirección"
      type="description"
      v-model="description"
      variant="input-secondary"
    />
    <TextArea
      label="Descripción del restaurante"
      field="address"
      placeholder="Escribe información acerca del restaurante"
      type="address"
      v-model="address"
      variant="input-secondary"
    ></TextArea>
    <button
      class="button flex text-black disabled:"
      :class="!disabled ? 'blue-hover' : ' disabled animate-pulse'"
      type="submit"
      :disabled="disabled"
    >
      <span @click="emit('save', { name, description, address })">Guardar</span>
    </button>
  </div>
</template>
