<script setup lang="ts">
import TailorSmall from "@/components/common/icons/TailorSmall.vue";
import HeaderLayout from "@/layouts/Header.layout.vue";
import FormStep from "./components/steps/FormStep.vue";
import SuccessStep from "./components/steps/SuccessStep.vue";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { ERoutes } from "@/router/router.utils";

const router = useRouter();

const showSuccess = ref(false);
const loading = ref(false);
const restaurantId = ref<string | undefined>(undefined);

const handleNavigation = () => {
  if (restaurantId.value) goToDetail(restaurantId.value);
  else router.push({ name: ERoutes.RESTAURANT_LIST });
};

const goToDetail = (id: string) => {
  router.push({
    name: ERoutes.RESTAURANT_DETAIL,
    params: { id },
  });
};

const handleSubmit = () => {
  loading.value = true;
};

const handleFinish = () => {
  showSuccess.value = true;
  loading.value = false;
};

const successMessage = computed(() =>
  restaurantId.value
    ? { title: "Restaurante Guardado", button: "Ver restaurante" }
    : { title: "Ups, algo salió mal", button: "Volver" }
);
</script>

<template>
  <HeaderLayout>
    <template v-slot:content>
      <div class="flex h-full content-center py-4">
        <div class="md:w-8/12 inline-block w-full md:m-auto">
          <div class="flex">
            <TailorSmall
              class="mx-auto"
              :class="{ 'animate-pulse': loading }"
            />
          </div>
          <SuccessStep
            :text="successMessage"
            v-if="showSuccess"
            :loading="loading"
            @click="handleNavigation"
          />
          <FormStep
            v-else
            @submit="handleSubmit"
            @finish="handleFinish"
            :class="{ 'd-none': loading }"
          />
          <p class="text-black text-center animate-pulse py-4" v-if="loading">
            L O A D I N G...
          </p>
          <div class="flex">
            <TailorSmall
              class="mx-auto"
              :class="{ 'animate-pulse': loading }"
            />
          </div>
        </div>
      </div>
    </template>
  </HeaderLayout>
</template>
