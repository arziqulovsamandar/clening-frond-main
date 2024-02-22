<template>
  <div
    @click="toggleDark()"
    class="w-[46px] h-6 border border-gray-200 bg-gray-200 rounded-s-full rounded-e-full relative cursor-pointer dark:bg-gray-500 dark:border-gray-500"
  >
    <span
      :class="{ 'translate-x-5': dark }"
      class="absolute top-1/2 -translate-y-1/2 rounded-full left-1 flex justify-center items-center w-4 h-4 duration-300"
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
    </span>
  </div>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiWhiteBalanceSunny, mdiWeatherNight } from "@mdi/js";
import { ref } from "vue";

import { useDark, useToggle } from "@vueuse/core";
const dark = useDark();
const toggleDark = useToggle(dark);
</script>

<style lang="scss" scoped></style>
