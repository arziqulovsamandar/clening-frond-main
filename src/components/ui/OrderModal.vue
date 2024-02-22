<template>
  <app-modal v-model="open">
    <div
      class="bg-white dark:bg-bg_dark flex w-full flex-col px-8 rounded-[32px] max-md:px-5"
    >
      <div
        class="self-stretch flex w-full items-start justify-between gap-5 mt-8"
      >
        <div
          class="text-bg_color dark:text-white text-2xl font-semibold leading-10"
        >
          {{ $t("modal.title") }}
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ed6eb4c-2269-48ca-9b30-5fdf2a9ceddf?"
          class="aspect-square object-contain object-center w-6 overflow-hidden max-w-full self-start cursor-pointer"
          @click="closeModal"
        />
      </div>
      <div
        class="text-zinc-500 dark:text-plh_color text-base leading-6 self-stretch mt-3.5"
      >
        {{ $t("modal.body") }}
      </div>
      <form @submit.prevent="sendContact">
        <div class="relative">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/510ca0d0-b3a9-4b11-ba5e-820602671290?"
            class="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden max-w-full self-start absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            v-model="name"
            type="text"
            required
            class="placeholder:text-plh_color text-bg_color outline-none text-base font-medium leading-6 whitespace-nowrap border bg-white self-stretch flex w-full items-start justify-between gap-3 mt-4 pl-10 pr-4 py-4 rounded-2xl border-solid border-neutral-200 max-md:pr-5"
            :placeholder="$t('modal.name')"
          />
        </div>
        <div class="relative">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2c4dbed-a87e-4e5c-b97f-07b441b8c476?"
            class="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden max-w-full self-start text-text_color absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            v-model="phone"
            type="text"
            pattern="^\+998\d{9}$"
            required
            class="placeholder:text-plh_color text-bg_color outline-none text-base font-medium leading-6 whitespace-nowrap border bg-white self-stretch flex w-full items-start justify-between gap-3 mt-4 pl-10 pr-4 py-4 rounded-2xl border-solid border-neutral-200 max-md:pr-5"
            :placeholder="$t('modal.phone')"
          />
        </div>
        <button
          type="submit"
          class="text-white text-base font-semibold leading-4 justify-center items-center shadow-lg bg-btn_color self-stretch flex w-full gap-3 my-8 px-20 py-4 rounded-xl max-md:px-5 cursor-pointer"
        >
          {{ $t("btn.send") }}
          <btn-loader v-if="loading" />
        </button>
      </form>
    </div>
  </app-modal>
  <app-modal v-model="done">
    <div class="bg-white flex w-full flex-col px-8 rounded-[32px] max-md:px-5">
      <div
        class="self-stretch flex flex-col w-full justify-center items-center gap-5"
      >
        <div
          class="text-bg_color text-2xl text-center font-semibold leading-10 my-5"
        >
          {{ $t("modal.delivered") }}
        </div>
        <button
          @click="done = false"
          type="button"
          class="px-6 py-1 border-none rounded-md bg-btn_color text-white"
        >
          Ok
        </button>
      </div>
    </div>
  </app-modal>
</template>
<script setup>
import appModal from "@/components/ui/app-modal.vue";
import { ref, watch } from "vue";
import { postStore } from "@/stores/user/post";
import BtnLoader from "@/components/ui/BtnLoader.vue";

const store = postStore();
const loading = ref(false);
const phone = ref();
const name = ref("");
const open = ref(false);
const done = ref(false);
const openModal = () => {
  open.value = true;
};
const closeModal = () => {
  open.value = false;
  phone.value = "";
  name.value = "";
};

const sendContact = async () => {
  loading.value = true;
  await store.sendContact({ name: name.value, phone: phone.value });
  loading.value = false;
  closeModal();
  done.value = true;
};

defineExpose({ openModal });
</script>
