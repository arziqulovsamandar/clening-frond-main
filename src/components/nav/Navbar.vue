<template>
  <div
    class="bg-white w-full shadow-lg dark:bg-bg_color border-t border-text_color"
  >
    <div
      class="flex container mx-auto items-start select-none justify-between gap-5 py-6 self-end max-md:max-w-full max-md:flex-wrap"
    >
      <div class="self-center flex items-start gap-3 my-auto cursor-pointer">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c56b5af-d681-4344-8ae1-6934926ddb36?"
          class="aspect-square object-contain object-center w-11 overflow-hidden max-w-full"
        />
        <div
          class="text-btn_color text-3xl font-bold leading-10 self-center whitespace-nowrap my-auto"
        >
          <a href="/home">Toza Makon</a>
        </div>
      </div>
      <div
        class="flex w-[800px] max-w-full items-start justify-between gap-5 max-md:flex-wrap"
      >
        <div
          class="items-start self-center flex w-[319px] max-w-full justify-between gap-5 my-auto max-md:justify-center"
        >
          <div class="items-start flex justify-between gap-1">
            <div class="">
              <el-dropdown>
                <span
                  class="el-dropdown-link outline-none text-bg_color dark:text-white text-lg font-semibold leading-6"
                >
                  {{ $t("nav.services") }}
                  <el-icon class="el-icon--right">
                    <arrow-down />
                  </el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu class="w-[200px]">
                    <a href="/service">
                      <el-dropdown-item>{{ $t("nav.all") }}</el-dropdown-item>
                    </a>
                    <a
                      :href="`/service/${item?.id}`"
                      v-for="item in store?.data"
                      :key="item?.id"
                    >
                      <el-dropdown-item>{{
                        item[`name_${lang}`]
                      }}</el-dropdown-item>
                    </a>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
          <div
            @click="goto('/blog')"
            class="text-bg_color dark:text-white text-lg cursor-pointer font-semibold leading-6"
          >
            {{ $t("nav.blog") }}
          </div>
          <div
            @click="goto('/about')"
            class="text-bg_color dark:text-white text-lg cursor-pointer font-semibold leading-6 whitespace-nowrap"
          >
            {{ $t("nav.aboutUs") }}
          </div>
        </div>
        <div
          class="items-start flex w-fit max-w-full justify-between gap-5 max-md:justify-center"
        >
          <div
            @click="toggleDark()"
            class="justify-center items-center cursor-pointer bg-big_color flex w-12 max-w-full flex-col p-3 rounded-xl dark:bg-text_color"
          >
            <svg-icon
              v-if="dark"
              type="mdi"
              :path="mdiWeatherNight"
              class="text-white"
            ></svg-icon>
            <svg-icon
              v-else
              type="mdi"
              :path="mdiWhiteBalanceSunny"
              class="text-yellow-500 w-full h-full"
            ></svg-icon>
          </div>
          <el-dropdown trigger="click">
            <div
              class="text-btn_color text-center text-sm font-semibold leading-6 whitespace-nowrap justify-center items-center bg-stone-100 w-12 max-w-full p-3 rounded-xl dark:bg-text_color dark:text-white"
            >
              {{ format(lang) }}
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="changeLang('uz')"
                  >Uzbek</el-dropdown-item
                >
                <el-dropdown-item @click="changeLang('ru')"
                  >Russian</el-dropdown-item
                >
                <el-dropdown-item @click="changeLang('en')"
                  >English</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <div
            @click="openMarket"
            class="text-white text-center cursor-pointer font-semibold leading-4 whitespace-nowrap justify-center items-center shadow-lg bg-emerald-500 w-fit max-w-full px-5 py-4 rounded-xl"
          >
            {{ $t("nav.btnTitle") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiWhiteBalanceSunny, mdiWeatherNight } from "@mdi/js";
import { ArrowDown } from "@element-plus/icons-vue";
import { useDark, useToggle } from "@vueuse/core";
import { categoryStore } from "@/stores/user/category";

const store = categoryStore();
const router = useRouter();
const dark = useDark();
const toggleDark = useToggle(dark);
const loading = ref(false);
const { locale } = useI18n({ useScope: "global" });

const lang = ref("");
const local = localStorage.getItem("lang");
lang.value = local || "uz";
watch(lang, (val) => {
  localStorage.setItem("lang", val);
  locale.value = val;
  location.reload();
});

onMounted(async () => {
  loading.value = true;
  await store.getCategories();
  loading.value = false;
});

const changeLang = (val) => {
  lang.value = val;
};

const format = (val) => {
  return `${val}`.toUpperCase();
};

const openMarket = () => {
  location.href =
    "https://play.google.com/store/apps/details?id=com.qlean.qlean";
};

const goto = (val) => {
  router.push({ path: val });
};
</script>

<style lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
