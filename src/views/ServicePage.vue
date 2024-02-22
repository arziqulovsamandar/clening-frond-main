<template>
  <div class="container mx-auto">
    <h2
      class="text-bg_color dark:text-white text-3xl font-bold w-full text-center pt-14 mb-8"
    >
      {{ $t("nav.all") }}
    </h2>
    <div class="flex flex-wrap gap-5">
      <div v-if="services.length < 1"></div>
      <service-card
        v-else
        v-for="service in services"
        :key="service?.id"
        :service="service"
      />
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
  loading.value = false;
});
</script>

<style lang="scss" scoped></style>
