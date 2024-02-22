<template>
  <AppModal v-model="openDeleteModal">
    <vee-form>
      <span class="w-full flex justify-center items-center">
        <svg-icon
          type="mdi"
          :path="mdiAlertCircleOutline"
          class="w-20 h-20 text-red-700 mb-3"
        ></svg-icon>
      </span>
      <h1
        class="text-[24px] font-bold w-full text-center mb-[20px] text-color1"
      >
        {{ del_title }}
      </h1>
      <div class="flex justify-center items-center w-full gap-3">
        <VButton
          btn_type="danger"
          :isLoading="loading"
          type="button"
          class="mt-5 text-[18px] px-8"
          @click="confirm"
        >
          Delete
        </VButton>
        <VButton
          btn_type="primary"
          :isLoading="false"
          type="button"
          class="mt-5 px-8 text-[18px]"
          @click="closeDelModal"
        >
          Cancel
        </VButton>
      </div>
    </vee-form>
  </AppModal>
  <AppModal v-model="openEditModal">
    <h1 class="text-[24px] font-bold w-full text-center mb-[20px] text-color1">
      {{ title }}
    </h1>

    <el-tabs v-model="activeName" class="" @tab-click="handleClick">
      <form @submit.prevent="addCategory" class="flex flex-col gap-5">
        <div class="w-full flex justify-normal items-center gap-5">
          <input type="file" @change="saveFile" />
          <input
            v-model="forms.url"
            type="url"
            required
            placeholder="Paste file url"
            class="border border-plh_color px-5 py-[6px] rounded-sm outline-none w-1/2 text-bg_color"
          />
        </div>
        <el-tab-pane name="uz" class="">
          <template #label>
            <span class="w-[50px] text-center">Uz</span>
          </template>
          <div class="w-full flex justify-normal items-center gap-5 mb-5">
            <input
              v-model="forms.name_uz"
              type="text"
              required
              placeholder="Enter category name"
              class="border border-plh_color px-5 py-[6px] rounded-sm outline-none w-1/2 text-bg_color"
            />
            <el-select
              v-model="forms.parent_category"
              placeholder="Select parent category"
              size="large"
            >
              <el-option label="null" :value="null" />
              <el-option
                v-for="item in categories"
                :key="item.id"
                :label="item[`name_${lang}`]"
                :value="item.id"
              />
            </el-select>
          </div>
          <textarea
            v-model="forms.description_uz"
            rows="5"
            required
            placeholder="Description"
            class="border border-plh_color outline-none resize-none rounded-sm px-5 py-3 text-bg_color w-full"
          ></textarea>
        </el-tab-pane>
        <el-tab-pane name="ru" class="">
          <template #label>
            <span class="w-[50px] text-center">Ru</span>
          </template>
          <div class="w-full flex justify-normal items-center gap-5 mb-5">
            <input
              v-model="forms.name_ru"
              type="text"
              required
              placeholder="Enter category name"
              class="border border-plh_color px-5 py-[6px] rounded-sm outline-none w-1/2 text-bg_color"
            />
            <el-select
              v-model="forms.parent_category"
              placeholder="Select parent category"
              size="large"
            >
              <el-option label="null" :value="null" />
              <el-option
                v-for="item in categories"
                :key="item.id"
                :label="item[`name_${lang}`]"
                :value="item.id"
              />
            </el-select>
          </div>
          <textarea
            v-model="forms.description_ru"
            rows="5"
            required
            placeholder="Description"
            class="border border-plh_color outline-none resize-none rounded-sm px-5 py-3 text-bg_color w-full"
          ></textarea>
        </el-tab-pane>
        <el-tab-pane name="en" class="">
          <template #label>
            <span class="w-[50px] text-center">En</span>
          </template>
          <div class="w-full flex justify-normal items-center gap-5 mb-5">
            <input
              v-model="forms.name_en"
              type="text"
              required
              placeholder="Enter category name"
              class="border border-plh_color px-5 py-[6px] rounded-sm outline-none w-1/2 text-bg_color"
            />
            <el-select
              v-model="forms.parent_category"
              placeholder="Select parent category"
              size="large"
            >
              <el-option label="null" :value="null" />
              <el-option
                v-for="item in categories"
                :key="item.id"
                :label="item[`name_${lang}`]"
                :value="item.id"
              />
            </el-select>
          </div>
          <textarea
            v-model="forms.description_en"
            rows="5"
            required
            placeholder="Description"
            class="border border-plh_color outline-none resize-none rounded-sm px-5 py-3 text-bg_color w-full"
          ></textarea>
        </el-tab-pane>
        <VButton
          btn_type="primary"
          :isLoading="loading"
          type="submit"
          class="mt-5 w-full text-[18px]"
        >
          {{ btn_title }}
        </VButton>
      </form>
    </el-tabs>
  </AppModal>
</template>

<script setup>
import { computed, reactive, ref, watch } from "vue";
import AppModal from "@/components/ui/app-modal.vue";
import { danger, success, warning } from "@/plugins/Notification";
import VInput from "@/components/form/VInput.vue";
import VButton from "@/components/ui/VButton.vue";
import { categoryStore } from "@/stores/admin/category";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAlertCircleOutline } from "@mdi/js";

const store = categoryStore();

const activeName = ref("uz");

const handleClick = (tab, event) => {
  console.log(tab, event);
};
const loading = ref(false);
const openDeleteModal = ref(false);
const openEditModal = ref(false);
const title = ref("Add New Service");
const ID = ref(null);
const del_title = ref("Are you sure to delete?");
const categories = ref([]);
const lang = localStorage.getItem("lang") || "uz";

const saveFile = async (e) => {
  const file = new FormData();
  file.append("file", e?.target?.files[0]);
  const res = await store.uploadFile(file);
  forms.value.url = res?.filename;
};

const btn_title = computed(() => {
  if (store.loading) {
    return "Loading";
  } else {
    return "Save";
  }
});

const forms = ref({
  name_uz: "",
  description_uz: "",
  name_ru: "",
  description_ru: "",
  name_en: "",
  description_en: "",
  parent_category: null,
  url: "",
});

watch(openEditModal, (val) => {
  if (!val) {
    forms.value = {
      name_uz: "",
      description_uz: "",
      name_ru: "",
      description_ru: "",
      name_en: "",
      description_en: "",
      parent_category: null,
      url: "",
    };
    title.value = "Add New Service";
  }
});

const openModal = async (item) => {
  await store.getCategories();
  categories.value = store.data || [];
  if (item.id) {
    forms.value = { ...item };
    title.value = "Edit Service";
  }
  openEditModal.value = true;
};

const openDelModal = (id) => {
  console.log(id, "id");
  ID.value = id;
  openDeleteModal.value = true;
};

const closeDelModal = () => {
  openDeleteModal.value = false;
};

const closeModal = () => {
  openEditModal.value = false;
};

const addCategory = async () => {
  loading.value = true;
  if (forms.value?.id) {
    const res = await store.updateCategory(forms.value?.id, forms.value);
    store.getCategories();
    if (!res?.error) {
      success("successfully updated ");
      openEditModal.value = false;
    } else {
      console.log(store.error, "error");
      danger(store.error?.message);
    }
  } else {
    const res = await store.addCategory(forms.value);
    store.getCategories();
    if (!res?.error) {
      success("successfully added ");
      openEditModal.value = false;
    } else {
      danger(store.error);
    }
  }
  loading.value = false;
};

const confirm = async () => {
  loading.value = true;
  const res = await store.deleteCategory(ID.value);
  store.getCategories();
  loading.value = false;
  if (!res?.error) {
    success("Deleted success");
  } else {
    danger("Failed!");
  }
  openDeleteModal.value = false;
};

defineExpose({ openModal, closeModal, openDelModal });
</script>

<style lang="scss" scoped></style>
