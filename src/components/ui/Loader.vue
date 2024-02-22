<template>
  <span class="loader fixed top-1/2 right-1/2"></span>
</template>

<script setup></script>

<style lang="scss" scoped>
.loader {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid rgb(3, 1, 33);
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.dark .loader {
  border-top: 3px solid #fff;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
