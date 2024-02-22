<template>
  <div class="w-full pt-5">
    <div class="w-full">
      <post-modal ref="post_modal"></post-modal>
    </div>
    <loader v-if="dataLoading"></loader>
    <div v-else>
      <div class="w-full flex justify-between items-center sm:pr-5 pr-1">
        <h1 class="text-[#002842] text-[22px] font-semibold capitalize">
          Posts ({{ count || 0 }})
        </h1>
        <VButton
          type="button"
          btn_type="primary"
          :isLoading="false"
          @click="post_modal?.openModal"
          class="px-10"
          >Add new post</VButton
        >
      </div>
      <div class="w-full overflow-auto mt-5">
        <Table v-if="count" :header="header" :data="data">
          <template #body_name="{ item }">
            <span @click="selectOne(item.id)" class="w-full">{{
              `${item.name}`
            }}</span>
          </template>
          <template #body_category="{ item }">
            <span v-if="item?.category">{{
              `${item?.category[`name_${lang}`]}`
            }}</span>
            <span v-else class="text-red-600 font-medium">{{ `null` }}</span>
          </template>
          <template #body_action="{ item }">
            <span class="w-full flex justify-start items-center">
              <VAction :item="item" :item_action="post_modal"></VAction>
            </span>
          </template>
        </Table>
        <h1
          v-else
          class="w-full text-center text-[20px] text-color1 mt-10 font-medium"
        >
          No data
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import PostModal from "@/views/modals/PostModal.vue";
import Loader from "@/components/ui/Loader.vue";
import { onMounted, ref } from "vue";
import { postStore } from "@/stores/admin/post";
import VButton from "@/components/ui/VButton.vue";
import Table from "@/components/ui/Table.vue";
import { useRouter } from "vue-router";
import VAction from "@/components/ui/VAction.vue";

const router = useRouter();
const store = postStore();
const post_modal = ref();
const dataLoading = ref(false);
const lang = localStorage.getItem("lang") || "uz";
const data = ref([]);
const count = ref(0);

const onClickHandler = async () => {
  data.value = await store.getPosts();
  count.value = data.value.length;
};

const params = ref({
  page: 1,
  limit: 10,
});

const openModal = (item) => {
  post_modal.openModal(item);
};

const header = ref([
  { title: "ID", value: "id" },
  { title: "Title", value: "title_" + lang },
  { title: "Category", value: "category" },
  { title: "Action", value: "action" },
]);

onMounted(async () => {
  dataLoading.value = true;
  data.value = await store.getPosts();
  count.value = data.value.length;
  dataLoading.value = false;
});
</script>

<style lang="scss"></style>
