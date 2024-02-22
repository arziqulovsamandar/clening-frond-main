import { defineStore } from "pinia";
import { authApi } from "@/api/admin/authApi";
import router from "../../router";
export const authStore = defineStore("auth", {
  state: () => ({
    error: null,
    data: null,
    loading: false,
  }),
  actions: {
    async login(payload) {
      try {
        const res = await authApi.login(payload);
        this.data = res?.data?.admin;
        localStorage.setItem("token", this.data?.token);
        localStorage.setItem("user", JSON.stringify(this.data));
        router.push({ path: "/admin" });
        return true;
      } catch (error) {
        this.error = error?.response?.data ? error?.response?.data : error;
        console.log(error);
        return false;
      }
    },
    async logout() {
      try {
        const res = await authApi.logout();
        this.data = res;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        return true;
      } catch (error) {
        this.error = error?.response?.data ? error?.response?.data : error;
        console.log(error);
        return false;
      }
    },
  },
});
