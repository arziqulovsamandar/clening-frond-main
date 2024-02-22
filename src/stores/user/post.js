import { defineStore } from "pinia";
import { userApi } from "@/api/user/userApi";
export const postStore = defineStore("post", {
  state: () => ({
    error: null,
    data: null,
    loading: false,
  }),
  actions: {
    async getPosts() {
      try {
        const res = await userApi.getPosts();
        // this.data = [...res?.data];
        console.log(res);
        return res?.data;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      }
    },
    async getPost(id) {
      try {
        const res = await userApi.getPost(id);
        console.log(res);
        return res.data || [];
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      }
    },

    async getCategoryPost(id) {
      try {
        const res = await userApi.getCategoryPosts(id);
        console.log(res);
        return res.data || [];
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      }
    },

    async sendContact(payload) {
      try {
        const res = await userApi.sendContact(payload);
        console.log(res);
        return true;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      }
    },
    async getContacts() {
      try {
        const res = await userApi.getContacts();
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
        const res = await userApi.deleteMessage(id);
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
