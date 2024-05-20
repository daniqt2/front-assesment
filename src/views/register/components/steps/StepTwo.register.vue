<script setup lang="ts">
import TInput from "@/components/common/form/TInput.vue";
import { useField, useForm } from "vee-validate";
import { IStepTwoFields } from "./utils";

const emit = defineEmits<{
  (e: "next", formData: { password: string }): void;
}>();

const { handleSubmit, validate } = useForm();

const { value: password, errorMessage: passwordError } = useField(
  "password",
  "required|min:6"
);

const submitStep = handleSubmit(async (vals: IStepTwoFields) => {
  const isValid = await validate();
  isValid && emit("next", vals);
});
</script>

<template>
  <div>
    <button><i class="fa-solid fa-arrow-left"></i></button>
    <form @submit.prevent="submitStep">
      <TInput
        label="Crea una contraseña nueva:"
        field="password"
        type="password"
        placeholder="Añade una contraseña"
        v-model="password"
      />
      <p c>{{ passwordError }}</p>
      <button type="submit" class="white-button" @click="submitStep">
        Finalizar
      </button>
    </form>
  </div>
</template>
