<script setup lang="ts">
import TInput from "@/components/common/form/TInput.vue";
import { useField, useForm } from "vee-validate";
import { IStepOneFields } from "./utils";

const emit = defineEmits<{
  (e: "next", formData: { email: string; username: string }): void;
}>();

const required = (value: string) => value?.length > 0;
const { handleSubmit, validate } = useForm();

const { value: email, errorMessage: emailError } = useField(
  "email",
  "required|email"
);
const { value: username, errorMessage: usernameError } = useField(
  "username",
  "required"
);

const submitStep = handleSubmit(async (vals: IStepOneFields) => {
  const isValid = await validate();
  isValid && emit("next", vals);
});
</script>

<template>
  <div>
    <form @submit.prevent="submitStep">
      <TInput
        label="Email:"
        field="email"
        placeholder="Añade tu email"
        type="email"
        :error="emailError"
        v-model="email"
      />
      <TInput
        label="Nombre de usuario:"
        field="username"
        placeholder="Añade tu nombre"
        v-model="username"
        :error="usernameError"
      />
      <button type="submit" class="white-button">Siguiente</button>
    </form>
  </div>
</template>
