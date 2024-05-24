<script setup lang="ts">
import ColumnLayout from "@/layouts/Column.layout.vue";
import { useRestaurantStore } from "@/store/restaurant.store";
import { useForm } from "vee-validate";
import ImageUpload from "../ImageUpload.vue";
import CreateForm from "../CreateForm.vue";
import { ref } from "vue";

export interface ICreateFields {
  name: string;
  description: string;
  address: string;
  image: string;
}

const { createRestaurant } = useRestaurantStore();

const { handleSubmit, validate, setValues, values } = useForm();
const disableForm = ref(false);

const emit = defineEmits<{
  (e: "submit"): void;
  (e: "finish"): void;
}>();

const submitData = handleSubmit(async (params: ICreateFields) => {
  emit("submit");
  const isValid = await validate();
  if (isValid) {
    createRestaurant(params).then(() => emit("finish"));
  }
});

const handleLoad = (img: string | null) => {
  setValues({ image: img });
};

const handleSave = (vals: Partial<ICreateFields>) => {
  disableForm.value = true;
  setValues({
    name: vals.name,
    description: vals.description,
    address: vals.address,
  });
  submitData();
};
</script>

<template>
  <form :class="disableForm ? 'hidden' : 'block'">
    <ColumnLayout>
      <template v-slot:left-column><ImageUpload @load="handleLoad" /></template>
      <template v-slot:right-column
        ><CreateForm @save="handleSave" :disabled="disableForm"
      /></template>
    </ColumnLayout>
  </form>
</template>
