<template>
  <div class="pb-20">
    <div class="pt-10">
      <div>
        <h1
          class="w-full text-center mb-10 text-bg_color dark:text-white text-2xl font-semibold"
        >
          BLOGS
        </h1>
      </div>
    </div>
    <div v-if="data.length">
      <blog-card v-for="item in data" :key="item?.id" :data="item" />
    </div>
  </div>
</template>

<script setup>
import BlogCard from "@/components/section/BlogCard.vue";
import { postStore } from "@/stores/user/post";
import { onMounted, ref } from "vue";

const store = postStore();
const data = ref([]);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  data.value = await store.getPosts();
  loading.value = false;
});
</script>

<style lang="scss" scoped></style>
