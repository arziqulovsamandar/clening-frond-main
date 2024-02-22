<template>
  <AppModal v-model="modal">
    <vee-form>
      <span class="w-full flex justify-center items-center">
        <svg-icon
          type="mdi"
          :path="mdiAlertCircleOutline"
          class="w-20 h-20 text-red-700 mb-3"
        ></svg-icon>
      </span>
      <h1
        class="text-[24px] font-bold w-full text-center mb-[20px] text-bg_color"
      >
        Are you sure to delete?
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
          @click="modal = false"
        >
          Cancel
        </VButton>
      </div>
    </vee-form>
  </AppModal>
  <div class="w-full pt-5">
    <loader v-if="dataLoading"></loader>
    <div v-else>
      <div class="w-full flex justify-between items-center sm:pr-5 pr-1">
        <h1 class="text-[#002842] text-[22px] font-semibold capitalize">
          Messages ({{ count }})
        </h1>
      </div>
      <div class="w-full overflow-auto mt-5">
        <Table v-if="count" :header="header" :data="messages">
          <template #body_action="{ item }">
            <span
              class="w-full flex justify-start items-center hover:text-red-600"
            >
              <svg-icon
                type="mdi"
                :path="mdiTrashCanOutline"
                @click="deleteMessage(item?.id)"
              ></svg-icon>
            </span>
          </template>
        </Table>
        <h1
          v-else
          class="w-full text-center text-[20px] text-color1 mt-10 font-medium"
        >
          No data
        </h1>
        <!-- <div
          v-if="messages?.length"
          class="w-full flex justify-end px-5 items-center mt-3"
        >
          <vue-awesome-paginate
            :total-items="count"
            :items-per-page="params.limit"
            :max-pages-shown="2"
            v-model="params.page"
            :on-click="onClickHandler"
          />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import Loader from "@/components/ui/Loader.vue";
import { onMounted, ref } from "vue";
import { messageStore } from "@/stores/admin/message";
import VButton from "@/components/ui/VButton.vue";
import Table from "@/components/ui/Table.vue";
import { useRouter } from "vue-router";
import VAction from "@/components/ui/VAction.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiTrashCanOutline, mdiAlertCircleOutline } from "@mdi/js";
import AppModal from "@/components/ui/app-modal.vue";

const router = useRouter();
const store = messageStore();
const count = ref(0);
const dataLoading = ref(false);
const loading = ref(false);
const messages = ref([]);
const modal = ref(false);
let ID;

const deleteMessage = (id) => {
  modal.value = true;
  ID = id;
};

const confirm = async () => {
  loading.value = true;
  await store.deleteMessage(ID);
  loading.value = false;
  modal.value = false;
  messages.value = await store.getContacts();
  count.value = messages.value?.length || 0;
};

const header = ref([
  { title: "Client name", value: "name" },
  { title: "Phone number", value: "phone" },
  { title: "Action", value: "action" },
]);

onMounted(async () => {
  dataLoading.value = true;
  messages.value = await store.getContacts();
  count.value = messages.value?.length || 0;
  dataLoading.value = false;
});
</script>

<style lang="scss"></style>
