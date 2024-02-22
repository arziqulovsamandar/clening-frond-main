<template>
  <div
    class="w-full px-8 py-3 flex items-center gap-5 bg-bg_primary_light dark:bg-bg_primary_dark"
  >
    <Switch />
    <h1 class="text-text_primary_light select-none dark:text-text_primary_dark">
      {{ $t("header.title") }}
    </h1>
    <el-select v-model="lang" class="w-28" placeholder="Select">
      <el-option label="Uzbek" value="uz" />
      <el-option label="English" value="en" />
      <el-option label="Russian" value="ru" />
    </el-select>
    <Loader v-if="lang == 'uz'" />
  </div>
</template>

<script setup>
import Switch from "@/components/ui/Switch.vue";
import { useI18n } from "vue-i18n";
import { ref, watch } from "vue";
import Loader from "@/components/ui/Loader.vue";

const { locale } = useI18n({ useScope: "global" });

const lang = ref("");
const local = localStorage.getItem("lang");
lang.value = local || "uz";
watch(lang, (val) => {
  localStorage.setItem("lang", val);
  locale.value = val;
});
</script>

<style lang="scss" scoped></style>
