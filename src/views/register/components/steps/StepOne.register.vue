<script setup lang="ts">
import { useForm, useField } from "@vee-validate/core";
import * as yup from "yup";
import { ref } from "vue";

const emit = defineEmits<{
  (e: "next", formData: { name: string }): void;
}>();

const formSchema = yup.object({
  name: yup.string().required("Name is required"),
});

const { handleSubmit, errors } = useForm({
  validationSchema: formSchema,
});

const form = ref({
  name: "",
});

const nextStep = () => {
  // Emit an event to the parent to proceed to the next step
  emit("next", form.value);
};
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Name:</label>
        <input v-model="form.name" name="name" type="text" />
        <span>{{ errors.name }}</span>
      </div>
      <button type="submit">Next</button>
    </form>
  </div>
</template>
