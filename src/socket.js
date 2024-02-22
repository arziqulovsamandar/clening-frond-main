import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  messageEvents: [],
  barEvents: [],
});

// "undefined" means the URL will be computed from the `window.location` object
const URL = "http://localhost:3000";

export const socket = io(URL);

socket.on("connect", () => {
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("message", (...args) => {
  state.messageEvents.push(args);
});

socket.on("bar", (...args) => {
  state.barEvents.push(args);
});
