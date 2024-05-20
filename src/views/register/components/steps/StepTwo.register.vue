<script setup lang="ts">
import TInput from "@/components/common/form/TInput.vue";
import { useField, useForm } from "vee-validate";

const emit = defineEmits<{
  (e: "next", formData: { password: string }): void;
}>();

const required = (value: string) => value?.length > 0;

const { handleSubmit, validate } = useForm();

const { value: password, errorMessage: passwordError } = useField(
  "password",
  required
);

const submitStep = handleSubmit(async () => {
  const isValid = await validate();
  isValid && emit("next", { password });
});
</script>

<template>
  <div>
    <button><i class="fa-solid fa-arrow-left"></i></button>
    <form @submit.prevent="submitStep">
      <TInput
        label="Crea una contraseña nueva:"
        field="password"
        placeholder="Añade una contraseña"
        v-model="password"
      />
      <button type="submit" class="white-button">Finalizar</button>
    </form>
  </div>
</template>
