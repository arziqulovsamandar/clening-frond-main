<template>
  <div class="flex flex-col items-end gap-4 z-50">
    <div
      v-if="active"
      class="bg-white dark:bg-bg_color dark:border-bg_color flex w-[482px] flex-col px-8 rounded-[32px] duration-200 border border-plh_color"
    >
      <div
        class="text-bg_color dark:text-white text-2xl font-semibold leading-10 self-stretch whitespace-nowrap mt-6"
      >
        Chat
      </div>
      <div
        class="text-text_color dark:text-plh_color text-base font-medium leading-6 self-stretch mt-5"
      >
        {{ $t("chat.title") }}
      </div>
      <div
        ref="chatbox"
        class="flex w-full flex-col mt-5 max-h-[100px] overflow-auto"
      >
        <span
          v-for="(item, index) in store.messages"
          :key="index"
          class="w-fit py-1 my-1 px-3 rounded-md bg-slate-300"
          :class="{ 'bg-green-300': id == item?.id }"
          >{{ item?.message }}</span
        >
      </div>
      <div
        class="self-stretch flex items-start justify-between gap-3 mt-3 mb-8 max-md:mt-10"
      >
        <input
          v-model="message"
          class="placeholder:text-plh_color text-bg_color text-base font-medium border bg-white w-[350px] max-w-full grow basis-auto pl-4 pr-20 py-3 rounded-2xl border-solid border-neutral-200 max-md:pr-5 outline-none"
          :placeholder="$t('chat.placeholder')"
        />
        <div
          @click="sendMessage"
          class="justify-center items-center bg-btn_color self-stretch flex w-12 max-w-full flex-col p-3 rounded-xl"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="vuesax/linear/send-2">
              <g id="send-2">
                <path
                  id="Vector"
                  d="M7.39993 6.32003L15.8899 3.49003C19.6999 2.22003 21.7699 4.30003 20.5099 8.11003L17.6799 16.6C15.7799 22.31 12.6599 22.31 10.7599 16.6L9.91993 14.08L7.39993 13.24C1.68993 11.34 1.68993 8.23003 7.39993 6.32003Z"
                  fill="white"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M10.1101 13.6501L13.6901 10.0601"
                  stroke="#0FC36D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div
      @click="active = !active"
      :class="
        custom +
        ' w-12 h-12 rounded-full shadow-lg flex justify-center items-center border border-btn_color'
      "
    >
      <svg
        v-if="!active"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="vuesax/linear/sms">
          <g id="sms">
            <path
              id="Vector"
              d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
              fill="white"
              stroke="white"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
              stroke="#00A099"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M7.75732 16.2427L16.2426 7.75739"
          stroke="#0FC36D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.2426 16.2426L7.75732 7.75732"
          stroke="#0FC36D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
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
