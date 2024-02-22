import { defineStore } from "pinia";
import { serviceApi } from "@/api/admin/serviceApi";
export const serviceStore = defineStore("service", {
  state: () => ({
    error: null,
    data: null,
    loading: false,
  }),
  actions: {
    async addService(payload) {
      try {
        const res = await serviceApi.addService(payload);
        // this.data = res;
        console.log(res);
        return true;
      } catch (error) {
        this.error = error?.response?.data ? error?.response?.data : error;
        console.log(error);
        return false;
      }
    },
    async updateService(id, payload) {
      try {
        const res = await serviceApi.updateService(id, payload);
        // this.data = res;
        console.log(res);
        return true;
      } catch (error) {
        this.error = error?.response?.data ? error?.response?.data : error;
        console.log(error);
        return false;
      }
    },
    async deleteService(id) {
      try {
        const res = await serviceApi.deleteService(id);
        // this.data = res;
        console.log(res);
        return true;
      } catch (error) {
        this.error = error?.response?.data ? error?.response?.data : error;
        console.log(error);
        return false;
      }
    },
    async getServices() {
      try {
        const res = await serviceApi.getServices();
        // this.data = res;
        console.log(res);
        return true;
      } catch (error) {
        this.error = error?.response?.data ? error?.response?.data : error;
        console.log(error);
        return false;
      }
    },
  },
});
