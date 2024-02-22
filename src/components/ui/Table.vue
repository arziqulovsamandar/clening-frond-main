<template>
  <table class="w-full border-collapse">
    <thead class="bg-bg_color text-[14px] uppercase font-normal text-white">
      <tr>
        <th
          class="py-4 px-5 text-left"
          v-for="(title, index) in header"
          :key="index"
        >
          <span>{{ title.title }}</span>
        </th>
      </tr>
    </thead>
    <tbody class="text-left">
      <tr
        class="bg-[#F6FBFF] text-[#065FD4] px-5 h-[70px] select-none cursor-pointer hover:bg-[#ebf6ff]"
        v-for="(item, index) in data"
        :key="index"
      >
        <td class="px-5" v-for="(col, ind) in header" :key="ind">
          <slot :name="`body_${col.value}`" :item="item">
            {{ item[col.value] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps({
  header: Array,
  data: Array,
});
</script>

<style lang="scss" scoped></style>
