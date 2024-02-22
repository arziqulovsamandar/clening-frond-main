import axiosClient from "@/api/axios/clientApi";

export const categoryApi = {
  addCategory(payload) {
    const url = `category`;
    return axiosClient.post(url, payload);
  },
  updateCategory(id, payload) {
    const url = `category/${id}`;
    return axiosClient.patch(url, payload);
  },
  deleteCategory(id) {
    const url = `category/${id}`;
    return axiosClient.delete(url);
  },
  getCategories() {
    const url = `category/services`;
    return axiosClient.get(url);
  },
  uploadFile(file) {
    const url = `category/upload`;
    return axiosClient.post(url, file);
  },
};
