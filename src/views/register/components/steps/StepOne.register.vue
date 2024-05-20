<script setup lang="ts">
import TInput from "@/components/common/form/TInput.vue";
import { useField, useForm } from "vee-validate";

const emit = defineEmits<{
  (e: "next", formData: { email: string; username: string }): void;
}>();

const required = (value: string) => value?.length > 0;

const { handleSubmit, validate } = useForm();

const { value: email, errorMessage: emailError } = useField("email", required);
const { value: username, errorMessage: usernameError } = useField(
  "username",
  required
);

const submitStep = handleSubmit(async () => {
  const isValid = await validate();
  isValid && emit("next", { email, username });
});

// TODO - SAVE VALUES FOR DEFAULT AND SEND
</script>

<template>
  <div>
    <form @submit.prevent="submitStep">
      <TInput
        label="Email:"
        field="email"
        placeholder="Añade tu email"
        type="email"
        v-model="email"
      />
      <TInput
        label="Nombre de usuario:"
        field="username"
        placeholder="Añade tu nombre"
        v-model="username"
      />
      <button type="submit" class="white-button">Siguiente</button>
    </form>
  </div>
</template>
