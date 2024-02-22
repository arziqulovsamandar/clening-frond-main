<template>
  <div class="w-full pt-5">
    <div class="w-full">
      <category-modal ref="category_modal"></category-modal>
    </div>
    <loader v-if="dataLoading"></loader>
    <div v-else>
      <div class="w-full flex justify-between items-center sm:pr-5 pr-1">
        <h1 class="text-[#002842] text-[22px] font-semibold capitalize">
          Services ({{ count }})
        </h1>
        <VButton
          type="button"
          btn_type="primary"
          :isLoading="false"
          @click="category_modal?.openModal"
          class="px-10"
          >Add service</VButton
        >
      </div>
      <div class="w-full overflow-auto mt-5">
        <Table v-if="store?.data?.length" :header="header" :data="store?.data">
          <template #body_name="{ item }">
            <span @click="selectOne(item.id)" class="w-full">{{
              `${item.name}`
            }}</span>
          </template>
          <template #body_parent="{ item }">
            <span v-if="item?.parent">{{
              `${item?.parent[`name_${lang}`]}`
            }}</span>
            <span v-else class="text-red-600 font-medium">{{ `null` }}</span>
          </template>
          <template #body_action="{ item }">
            <span class="w-full flex justify-start items-center">
              <VAction :item="item" :item_action="category_modal"></VAction>
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
import CategoryModal from "@/views/modals/CategoryModal.vue";
import Loader from "@/components/ui/Loader.vue";
import { onMounted, ref } from "vue";
import { categoryStore } from "@/stores/admin/category";
import VButton from "@/components/ui/VButton.vue";
import Table from "@/components/ui/Table.vue";
import { useRouter } from "vue-router";
import VAction from "@/components/ui/VAction.vue";

const router = useRouter();
const store = categoryStore();
const category_modal = ref();
const count = ref(0);
const dataLoading = ref(false);
const lang = localStorage.getItem("lang") || "uz";

const onClickHandler = async () => {
  count.value = await store.getCategories(params.value);
};

const params = ref({
  page: 1,
  limit: 10,
});

const openModal = (item) => {
  category_modal.openModal(item);
};
const header = ref([
  { title: "ID", value: "id" },
  { title: "Service name", value: "name_" + lang },
  { title: "Category", value: "parent" },
  { title: "Action", value: "action" },
]);

onMounted(async () => {
  dataLoading.value = true;
  count.value = await store.getCategories(params.value);
  dataLoading.value = false;
});

const selectOne = (id) => {
  // router.push({ path: `/service/${id}` });
};
</script>

<style lang="scss"></style>
