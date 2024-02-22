import { defineStore } from "pinia";
import { postApi } from "@/api/admin/postApi";
export const postStore = defineStore("post", {
  state: () => ({
    error: null,
    data: null,
    categories: null,
    loading: false,
  }),
  actions: {
    async addPost(payload) {
      try {
        console.log(payload);
        const res = await postApi.addPost(payload);
        // this.data = res;
        console.log(res);
        return res;
      } catch (error) {
        this.error = error?.response?.data ? error?.response?.data : error;
        console.log(error);
        return false;
      }
    },
    async updatePost(id, payload) {
      try {
        const res = await postApi.updatePost(id, payload);
        // this.data = res;
        console.log(res);
        return res;
      } catch (error) {
        this.error = error?.response?.data ? error?.response?.data : error;
        console.log(error);
        return false;
      }
    },
    async deletePost(id) {
      try {
        const res = await postApi.deletePost(id);
        // this.data = res;
        console.log(res);
        return res;
      } catch (error) {
        this.error = error?.response?.data ? error?.response?.data : error;
        console.log(error);
        return false;
      }
    },
    async getPosts() {
      try {
        const res = await postApi.getPosts();
        // this.data = res?.data;
        console.log(res);
        return res?.data;
      } catch (error) {
        this.error = error?.response?.data ? error?.response?.data : error;
        console.log(error);
        return 0;
      }
    },
    async getCategories() {
      try {
        const res = await postApi.getCategories();
        this.categories = res?.data;
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
        const res = await postApi.uploadFile(file);
        this.data = res?.data;
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
