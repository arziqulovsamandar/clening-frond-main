<template>
  <router-view></router-view>
</template>

<script setup>
import { socket } from "@/socket";
import { chatStore } from "@/stores/chat";
const store = chatStore();

socket.on("message", (data) => {
  store.getMessage(data);
});
</script>

<style lang="scss" scoped></style>
