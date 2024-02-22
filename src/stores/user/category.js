import { defineStore } from "pinia";
import { userApi } from "@/api/user/userApi";
export const categoryStore = defineStore("category", {
  state: () => ({
    error: null,
    data: null,
    loading: false,
  }),
  actions: {
    async getCategories() {
      try {
        const res = await userApi.getCategories();
        this.data = [...res?.data];
        console.log(res);
        return true;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      }
    },
    async getServices() {
      try {
        const res = await userApi.getServices();
        console.log(res);
        return res.data || [];
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      }
    },

    async getCategoryServices(id) {
      try {
        const res = await userApi.getCategoryServices(id);
        console.log(res);
        return res.data || [];
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      }
    },

    async getService(id) {
      try {
        const res = await userApi.getService(id);
        console.log(res);
        return res?.data || {};
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      }
    },
  },
});
