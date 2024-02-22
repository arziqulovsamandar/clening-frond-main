import axiosClient from "@/api/axios/clientApi";

export const authApi = {
  login(payload) {
    const url = `auth/login`;
    return axiosClient.post(url, payload);
  },
  logout() {
    const url = `auth/logout`;
    return axiosClient.post(url);
  },
};
