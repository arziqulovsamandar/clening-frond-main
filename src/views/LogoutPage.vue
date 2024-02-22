<template></template>

<script setup>
import { authStore } from "@/stores/admin/auth";
import { onMounted, ref } from "vue";
import Loader from "@/components/ui/Loader.vue";

const loading = ref(false);
const store = authStore();
onMounted(async () => {
  loading.value = true;
  await store.logout();
  loading.value = false;
  location.replace("/login");
});
</script>

<style lang="scss" scoped></style>
