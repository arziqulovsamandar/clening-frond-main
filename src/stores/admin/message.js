import { defineStore } from "pinia";
import { postApi } from "@/api/admin/postApi";
export const messageStore = defineStore("message", {
  state: () => ({
    error: null,
    data: null,
    loading: false,
  }),
  actions: {
    async getContacts() {
      try {
        const res = await postApi.getContacts();
        console.log(res);
        return res?.data;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      }
    },
    async deleteMessage(id) {
      try {
        const res = await postApi.deleteMessage(id);
        console.log(res);
        return true;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      }
    },
  },
});
