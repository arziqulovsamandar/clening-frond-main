import { defineStore } from "pinia";
import { categoryApi } from "@/api/admin/categoryApi";
export const categoryStore = defineStore("category", {
  state: () => ({
    error: null,
    data: null,
    loading: false,
  }),
  actions: {
    async addCategory(payload) {
      try {
        console.log(payload);
        const res = await categoryApi.addCategory(payload);
        // this.data = res;
        console.log(res);
        return res;
      } catch (error) {
        this.error = error?.response?.data ? error?.response?.data : error;
        console.log(error);
        return false;
      }
    },
    async updateCategory(id, payload) {
      try {
        const res = await categoryApi.updateCategory(id, payload);
        // this.data = res;
        console.log(res);
        return res;
      } catch (error) {
        this.error = error?.response?.data ? error?.response?.data : error;
        console.log(error);
        return false;
      }
    },
    async deleteCategory(id) {
      try {
        const res = await categoryApi.deleteCategory(id);
        // this.data = res;
        console.log(res);
        return res;
      } catch (error) {
        this.error = error?.response?.data ? error?.response?.data : error;
        console.log(error);
        return false;
      }
    },
    async getCategories() {
      try {
        const res = await categoryApi.getCategories();
        this.data = res?.data;
        console.log(res);
        return res?.data?.length;
      } catch (error) {
        this.error = error?.response?.data ? error?.response?.data : error;
        console.log(error);
        return 0;
      }
    },
    async uploadFile(file) {
      try {
        const res = await categoryApi.uploadFile(file);
        // this.data = res?.data;
        console.log(res);
        return res?.data;
      } catch (error) {
        this.error = error?.response?.data ? error?.response?.data : error;
        console.log(error);
        return 0;
      }
    },
  },
});
