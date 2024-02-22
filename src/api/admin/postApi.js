import axiosClient from "@/api/axios/clientApi";

export const postApi = {
  addPost(payload) {
    const url = `post`;
    return axiosClient.post(url, payload);
  },
  updatePost(id, payload) {
    const url = `post/${id}`;
    return axiosClient.patch(url, payload);
  },
  deletePost(id) {
    const url = `post/${id}`;
    return axiosClient.delete(url);
  },
  getPosts() {
    const url = `post`;
    return axiosClient.get(url);
  },
  getCategories() {
    const url = `category`;
    return axiosClient.get(url);
  },
  uploadFile(file) {
    const url = `category/upload`;
    return axiosClient.post(url, file);
  },
  getContacts() {
    const url = `messages`;
    return axiosClient.get(url);
  },
  deleteMessage(id) {
    const url = `messages/${id}`;
    return axiosClient.delete(url);
  },
};
