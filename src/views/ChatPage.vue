<template>
  <div class="flex h-full">
    <div class="w-4/5 border border-plh_color/50 relative p-3">
      <div ref="chatbox" class="flex w-full flex-col mt-5 h-full overflow-auto">
        <span
          v-for="(item, index) in store?.messages"
          :key="index"
          class="w-fit py-1 my-1 px-3 rounded-md bg-slate-300"
          :class="{ 'bg-green-300': id == item?.id }"
          >{{ item?.message }}</span
        >
      </div>
      <div
        class="flex gap-3 justify-start items-center absolute bottom-2 left-2"
      >
        <input
          v-model="message"
          type="text"
          class="w-[300px] px-2 py-2 border outline-none rounded-lg"
          placeholder="Write a message..."
        />
        <button
          type="button"
          @click="sendMessage"
          class="px-6 py-2 text-lg border-none bg-indigo-700 rounded-lg text-white"
        >
          send
        </button>
      </div>
    </div>
    <div class="w-1/5"></div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { socket } from "@/socket";
import { chatStore } from "@/stores/chat";
const store = chatStore();

const id = computed(() => {
  return socket.id;
});
const chatbox = ref();
const active = ref(false);
const message = ref("");

const sendMessage = () => {
  message.value = message.value.trim();
  if (message.value) {
    socket.emit("message", { message: message.value, id: socket.id });
    message.value = "";
  }
};
// socket.on("message", (data) => {
//   store.getMessage(data);
//   chatbox.value.scrollTop = chatbox.value.scrollHeight;
// });

const custom = computed(() => {
  return active.value ? "bg-white" : "bg-btn_color";
});
</script>

<style lang="scss" scoped></style>
