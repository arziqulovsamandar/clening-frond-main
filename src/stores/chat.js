import { defineStore } from "pinia";
export const chatStore = defineStore("chat", {
  state: () => ({
    messages: [],
  }),
  actions: {
    async getMessage(message) {
      try {
        this.messages.push(message);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
