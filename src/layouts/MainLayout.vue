<template>
  <div>
    <div class="w-full top-0 left-0 z-[100]">
      <header-top />
      <navbar />
    </div>
    <div class="w-full dark:bg-bg_dark">
      <router-view></router-view>
    </div>
    <Footer :modal="openModal" />
    <header-top />
    <chat-box class="fixed bottom-6 right-8" />
    <order-modal ref="open" />
  </div>
</template>

<script setup>
import HeaderTop from "@/components/header/HeaderTop.vue";
import Navbar from "@/components/nav/Navbar.vue";
import Footer from "@/components/section/Footer.vue";
import OrderModal from "@/components/ui/OrderModal.vue";

import ChatBox from "@/components/ui/ChatBox.vue";
import { ref } from "vue";

const open = ref();
const openModal = () => {
  open.value?.openModal();
};
</script>

<style lang="scss" scoped></style>
