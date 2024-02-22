<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-3 w-24">
    <input v-model="value" class="border outline-none" />

    <button
      type="submit"
      :disabled="isLoading"
      class="px-6 py-2 border-none bg-indigo-600 text-white rounded-lg"
    >
      Submit
    </button>
  </form>
</template>

<script setup>
import { socket } from "@/socket";
import { ref } from "vue";
const isLoading = ref(false);
const value = ref("");

const onSubmit = () => {
  isLoading.value = true;

  socket.emit("message", value.value, () => {
    isLoading.value = false;
  });

  socket.on("message", (data) => {
    console.log(data);
  });
};
</script>
