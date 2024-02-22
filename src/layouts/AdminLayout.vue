<template>
  <div class="w-full md:h-screen min-h-screen flex select-none">
    <SideBar class="h-full shadow-lg"></SideBar>
    <div class="w-full h-full flex flex-col gap-2">
      <div class="sm:pl-7 pl-1 py-5 sm:pr-3 pr-1 h-full overflow-y-auto">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from "@/components/nav/SideBar.vue";
import { ref, watch } from "vue";
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
</script>

<style lang="scss" scoped></style>
