<script setup lang="ts">
import { ref } from "vue";
import StepOne from "./steps/StepOne.register.vue";
import StepTwo from "./steps/StepTwo.register.vue";

import { IStepOneFields } from "./steps/utils";
import TailorLogo from "@/components/common/TailorLogo.vue";
import { useRouter } from "vue-router";

const step = ref(1);

const router = useRouter();

const handleNext = (values: IStepOneFields) => {
  console.log(values);
  step.value += 1;
};

const handleBack = (values: IStepOneFields) => {
  switch (step.value) {
    case 1:
      router.back();
      break;
    case 2:
      step.value -= 1;
      break;
  }
};
</script>

<template>
  <TailorLogo fill="fill-white" class="mb-4" />
  <button class="arrow-button" @click="handleBack"><-</button>
  <StepOne v-if="step == 1" @next="handleNext"></StepOne>
  <StepTwo v-if="step == 2"></StepTwo>
</template>
