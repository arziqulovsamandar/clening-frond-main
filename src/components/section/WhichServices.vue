<template>
  <div class="flex flex-col justify-center items-center">
    <div
      class="items-start self-center flex w-[630px] max-w-full flex-col px-5 max-md:mt-10"
    >
      <div
        class="items-center self-stretch flex flex-col -mr-5 max-md:max-w-full"
      >
        <div
          class="self-stretch text-btn_color text-center text-2xl font-semibold leading-10 max-md:max-w-full"
        >
          {{ $t("whichServices.top") }}
        </div>
        <div
          class="self-stretch text-bg_color dark:text-white text-center text-4xl font-bold leading-[56px] mt-2 max-md:max-w-full"
        >
          {{ $t("whichServices.title") }}
        </div>
      </div>
      <div
        class="self-stretch text-text_color dark:text-white text-center text-base font-medium leading-6 -mr-5 mt-6 max-md:max-w-full"
      >
        {{ $t("whichServices.footer") }}
      </div>
    </div>
    <div class="self-center mt-14 px-5 max-md:mt-10">
      <div class="flex flex-wrap gap-5 justify-center">
        <div v-if="services.length < 1"></div>
        <service-card
          v-else
          v-for="service in services"
          :key="service?.id"
          :service="service"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceCard from "@/components/ui/ServiceCard.vue";
import { onMounted, ref } from "vue";
import { categoryStore } from "@/stores/user/category";

const store = categoryStore();
const loading = ref(false);
const services = ref([]);

onMounted(async () => {
  loading.value = true;
  services.value = await store.getServices();
  services.value = services.value.slice(0, 3);
  loading.value = false;
});
</script>

<style lang="scss" scoped></style>
