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
    <div class="flex flex-col md:w-2/3 mb-6">
      <label for="email" class="mb-2">Email</label>
      <input
        id="email"
        name="email"
        placeholder="Escribe tu email"
        class="bg-transparent border-white border rounded-full p-2"
      />
    </div>
    <div class="flex flex-col md:w-2/3 mb-6">
      <label for="contraseña" class="mb-2">Contraseña</label>
      <input
        id="constraseña"
        type="password"
        name="constraseña"
        placeholder="Escribe tu contraseña"
        class="bg-transparent border-white border rounded-full p-2"
      />
    </div>
  </form>
  <button class="border border-white rounded-full p-2 px-3 hover:font-bold">
    Siguiente
  </button>
</template>
