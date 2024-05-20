<script setup lang="ts">
import { useForm } from "vee-validate";

// Validation, or use `yup` or `zod`
function required(value: string) {
  return value ? true : "This field is required";
}

// Create the form
const { defineField, handleSubmit, errors } = useForm({
  validationSchema: {
    field: required,
  },
});

// Define fields
const nameField = defineField("name");
const passwordField = defineField("password");

// Submit handler
const onSubmit = handleSubmit((values) => {
  // Submit to API
  console.log(values);
});
</script>

<template>
  <form @submit="onSubmit">
    <div class="field">
      <label for="email" class="mb-2">Email</label>
      <input
        id="email"
        name="email"
        placeholder="Escribe tu email"
        class="input"
      />
    </div>
    <div class="field">
      <label for="contraseña" class="mb-2">Contraseña</label>
      <input
        id="constraseña"
        type="password"
        name="constraseña"
        placeholder="Escribe tu contraseña"
        class="input"
      />
    </div>
  </form>
  <button class="white-button">Siguiente</button>
</template>
