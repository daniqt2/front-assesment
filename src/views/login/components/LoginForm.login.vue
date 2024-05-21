<script setup lang="ts">
import TInput from "@/components/common/form/TInput.vue";
import { useField, useForm } from "vee-validate";

interface IParams {
  email: string;
  password: string;
}
const { loading } = defineProps<{
  loading?: boolean;
}>();

const emit = defineEmits<{
  (e: "login", formData: { email: string; password: string }): void;
}>();

const { handleSubmit, validate } = useForm();

const required = (value: string) => value?.length > 0; // TODO -> VALIDATION file

const { value: email, errorMessage: emailError } = useField("email", required);
const { value: password, errorMessage: passwrodError } = useField(
  "password",
  required
);

const submitData = handleSubmit(async (params: IParams) => {
  const isValid = await validate();
  isValid && emit("login", params);
});
</script>

<template>
  <form @submit="submitData">
    <TInput
      label="Email"
      field="email"
      placeholder="Añade tu email"
      type="email"
      v-model="email"
    />
    <TInput
      label="Contraseña"
      field="password"
      placeholder="Escribe tu contraseña"
      type="password"
      v-model="password"
    />
    <button class="white-button flex" type="submit">
      <div class="animate-spin mr-2" v-if="loading">--</div>
      <span v-else>Entrar</span>
    </button>
  </form>
</template>
