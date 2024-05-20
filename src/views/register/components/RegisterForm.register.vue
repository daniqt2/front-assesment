<script setup lang="ts">
import { reactive, ref } from "vue";
import StepOne from "./steps/StepOne.register.vue";
import StepTwo from "./steps/StepTwo.register.vue";

import { IStepOneFields, IStepTwoFields } from "./steps/utils";
import TailorLogo from "@/components/common/icons/TailorLogo.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user.store";
import { IRegisterParams } from "@/services/auth.service";
import { ERoutes } from "@/router/router.utils";

const { signup } = useUserStore();

const step = ref(1);
const router = useRouter();

const userInfo = reactive<IRegisterParams>({
  email: "",
  name: "",
  password: "",
});

const handleNext = (values: IStepOneFields) => {
  userInfo.email = values.email;
  userInfo.name = values.username;
  step.value += 1;
};

const handleFinish = (values: IStepTwoFields) => {
  userInfo.password = values.password;
  step.value += 1;
  signup(userInfo).then(() => router.push({ name: ERoutes.LOGIN }));
};

const handleBack = () => {
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
  <button class="arrow-button" @click="handleBack" v-if="step < 2"><-</button>
  <StepOne v-if="step == 1" @next="handleNext"></StepOne>
  <StepTwo v-if="step == 2" @next="handleFinish"></StepTwo>
  <div class="py-4 text-center animate-pulse" v-if="step > 2">
    <p>C R E A N D O</p>
    <p>U S U A R I O</p>
  </div>
</template>
