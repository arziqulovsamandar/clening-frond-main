<template>
  <div class="flex bg-white h-full">
    <div
      class="w-[223px] bg-white inset-y-0 left-0 z-10 overflow-y-auto duration-300 translate-x-0"
    >
      <div
        class="self-center flex items-center justify-center gap-3 pb-5 my-5 border-b cursor-pointer"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c56b5af-d681-4344-8ae1-6934926ddb36?"
          class="aspect-square object-contain object-center w-8 overflow-hidden max-w-full"
        />
        <div
          class="text-btn_color text-2xl font-bold leading-10 self-center whitespace-nowrap my-auto"
        >
          Toza Makon
        </div>
      </div>
      <span v-for="(item, index) in menu" :key="index">
        <router-link
          :class="{ 'router-link-active': $route.meta.child === item.keys }"
          class="sidebar flex justify-start gap-4 items-center font-normal text-text_color text-[20px] pl-[30px] py-[15px] select-none transition-all duration-200"
          :to="item.path"
          ><Icon type="mdi" :path="item.icon" class="text-[20px]"></Icon>
          {{ item.label }}</router-link
        >
      </span>
      <span
        @click="openModal"
        class="flex justify-start gap-4 items-center font-normal text-text_color text-[20px] pl-[30px] py-[15px] select-none transition-all duration-200 cursor-pointer"
        ><Icon type="mdi" :path="mdiLogout" class="text-[20px]"></Icon> Logout
      </span>
      <el-dropdown trigger="click" class="w-full flex justify-start pl-[30px]">
        <div
          class="text-btn_color text-center text-sm font-semibold leading-6 whitespace-nowrap justify-center items-center bg-stone-100 w-12 h-12 max-w-full p-3 rounded-xl dark:bg-text_color dark:text-white"
        >
          {{ format(lang) }}
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="changeLang('uz')">Uzbek</el-dropdown-item>
            <el-dropdown-item @click="changeLang('ru')"
              >Russian</el-dropdown-item
            >
            <el-dropdown-item @click="changeLang('en')"
              >English</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <AppModal v-model="open">
      <vee-form>
        <span class="w-full flex justify-center items-center">
          <Icon
            type="mdi"
            :path="mdiAlertCircleOutline"
            class="w-20 h-20 text-red-700 mb-3"
          ></Icon>
        </span>
        <h1
          class="text-[24px] font-bold w-full text-center mb-[20px] text-bg_color"
        >
          Are you leaving
        </h1>
        <div class="flex justify-center items-center w-full gap-3">
          <VButton
            btn_type="danger"
            :isLoading="loading"
            type="button"
            class="mt-5 text-[18px] px-8"
            @click="confirm"
          >
            Leave
          </VButton>
          <VButton
            btn_type="primary"
            :isLoading="false"
            type="button"
            class="mt-5 px-8 text-[18px]"
            @click="closeDeleteModal"
          >
            Cancel
          </VButton>
        </div>
      </vee-form>
    </AppModal>
  </div>
</template>

<script setup>
import Icon from "@jamescoyle/vue-icon";
import {
  mdiAccount,
  mdiAccountGroup,
  mdiDoorOpen,
  mdiCog,
  mdiBookOpenBlankVariant,
  mdiLogout,
  mdiAlertCircleOutline,
  mdiBook,
  mdiEmailOutline,
} from "@mdi/js";
import { ref, watch } from "vue";
import VButton from "@/components/ui/VButton.vue";
import AppModal from "@/components/ui/app-modal.vue";
import { authStore } from "@/stores/admin/auth";
const store = authStore();
import { useI18n } from "vue-i18n";

const { locale } = useI18n({ useScope: "global" });

const lang = ref("");
const local = localStorage.getItem("lang");
lang.value = local || "uz";
watch(lang, (val) => {
  localStorage.setItem("lang", val);
  locale.value = val;
  location.reload();
});

const changeLang = (val) => {
  lang.value = val;
};
const format = (val) => {
  return `${val}`.toUpperCase();
};

const open = ref(false);

const openModal = () => {
  open.value = true;
};
const closeDeleteModal = () => {
  open.value = false;
};

const loading = ref(false);

const confirm = async () => {
  loading.value = true;
  await store.logout();
  loading.value = false;
  logout();
  // location.replace("/login");
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  location.reload();
};

const menu = [
  {
    path: "/services",
    name: "services",
    label: "Services",
    keys: "services",
    icon: mdiAccount,
  },
  {
    path: "/posts",
    name: "posts",
    label: "Posts",
    keys: "posts",
    icon: mdiBookOpenBlankVariant,
  },
  {
    path: "/messages",
    name: "messages",
    label: "Messages",
    keys: "messages",
    icon: mdiEmailOutline,
  },
  {
    path: "/chat",
    name: "chat",
    label: "Chat",
    keys: "chat",
    icon: mdiAccountGroup,
  },
];

defineExpose({ openModal });
</script>

<style lang="scss" scoped>
.router-link-active {
  background: #d2e4f0;
  color: #12486b;
}

//:class="index === 0 ? 'border-t border-color_bg' : ''" ;
</style>
