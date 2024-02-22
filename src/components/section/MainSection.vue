<template>
  <div class="bg-white flex flex-col relative dark:bg-bg_dark">
    <div class="w-full self-end max-md:max-w-full">
      <div
        class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 container mx-auto"
      >
        <div
          class="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0"
        >
          <div class="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
            <div
              class="items-start flex w-[615px] max-w-full flex-col self-start"
            >
              <div class="items-start flex flex-col max-md:max-w-full">
                <div
                  class="text-emerald-500 text-2xl font-semibold leading-10 max-md:max-w-full"
                >
                  {{ $t("main.title") }}
                </div>
                <div
                  class="text-slate-800 dark:text-white text-6xl font-bold leading-[72.24px] mt-2 max-md:max-w-full max-md:text-4xl"
                >
                  {{ $t("main.main") }}
                </div>
              </div>
              <div
                class="text-zinc-500 dark:text-white text-base font-medium leading-6 mt-6 max-md:max-w-full"
              >
                {{ $t("main.footer") }}
              </div>
            </div>
            <div
              class="items-start flex w-fit max-w-full justify-between gap-5 mt-14 self-start max-md:mt-10"
            >
              <div
                @click="openModal"
                class="text-white text-center cursor-pointer text-base font-semibold leading-4 whitespace-nowrap justify-center items-center shadow-lg bg-emerald-500 w-fit max-w-full px-5 py-4 rounded-xl"
              >
                {{ $t("btn.contact") }}
              </div>
              <router-link
                to="/service"
                class="text-emerald-500 cursor-pointer text-center text-base font-semibold leading-4 whitespace-nowrap justify-center items-center border w-fit max-w-full px-4 py-4 rounded-xl border-solid border-btn_color"
              >
                {{ $t("btn.services") }}
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0"
        >
          <img
            loading="lazy"
            src="../../assets/images/main_page.png"
            class="aspect-square object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
          />
        </div>
      </div>
    </div>
  </div>
  <order-modal ref="open" />
</template>

<script setup>
import OrderModal from "@/components/ui/OrderModal.vue";
import { ref } from "vue";

const open = ref();
const openModal = () => {
  open.value.openModal();
};
</script>

<style lang="scss" scoped></style>
