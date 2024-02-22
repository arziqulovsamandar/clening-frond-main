import axiosClient from "@/api/axios/clientApi";

export const userApi = {
  getCategories() {
    const url = `category`;
    return axiosClient.get(url);
  },
  getServices() {
    const url = `category/services`;
    return axiosClient.get(url);
  },
  getCategoryServices(id) {
    const url = `category/services/${id}`;
    return axiosClient.get(url);
  },
  getService(id) {
    const url = `category/${id}`;
    return axiosClient.get(url);
  },
  getPost(id) {
    const url = `post/${id}`;
    return axiosClient.get(url);
  },
  getPosts() {
    const url = `post`;
    return axiosClient.get(url);
  },
  getCategoryPosts(id) {
    const url = `post/category/${id}`;
    return axiosClient.get(url);
  },
  sendContact(payload) {
    const url = `messages`;
    return axiosClient.post(url, payload);
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
