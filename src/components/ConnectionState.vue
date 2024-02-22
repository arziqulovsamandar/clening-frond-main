<template>
  <p>State: {{ connected }}</p>
</template>

<script setup>
import { state } from "@/socket";
import { computed } from "vue";

const connected = computed(() => {
  return state.connected;
});
</script>
