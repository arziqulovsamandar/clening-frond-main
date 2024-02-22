import axiosClient from "@/api/axios/clientApi";

export const serviceApi = {
  addService(payload) {
    const url = `service`;
    return axiosClient.post(url, payload);
  },
  updateService(id, payload) {
    const url = `service/${id}`;
    return axiosClient.patch(url, payload);
  },
  deleteService(id) {
    const url = `service/${id}`;
    return axiosClient.delete(url);
  },
  getServices() {
    const url = `service`;
    return axiosClient.get(url);
  },
};
