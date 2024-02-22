<template>
  <div class="bg-bg_color w-full">
    <div
      class="flex container mx-auto items-start justify-between gap-5 py-4 self-end max-md:max-w-full max-md:flex-wrap"
    >
      <div
        class="flex items-start justify-between gap-2 md:max-w-full md:flex-wrap"
      >
        <div class="items-start flex justify-between gap-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1de28b36-9504-4d7e-ad8c-9bacefc2170a?"
            class="object-contain object-center w-full justify-center items-center overflow-hidden flex-1"
          />
          <div class="text-white text-xl font-semibold leading-6">77 57</div>
        </div>
        <div
          class="items-start flex grow shrink basis-auto gap-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a096adf1-5f5f-44d7-a7e0-ed42298d455a?"
            class="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden self-center max-w-full my-auto"
          />
          <div
            class="text-white text-sm font-medium leading-6 grow shrink basis-auto max-md:max-w-full"
          >
            {{ $t("header.title") }}
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1616987-39b9-4864-8748-f423e64f0dd5?"
            class="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden self-center max-w-full my-auto"
          />
          <div
            class="text-white text-base font-medium leading-6 whitespace-nowrap"
          >
            {{ $t("header.workTime") }}: 09:00 - 18:00
          </div>
        </div>
      </div>
      <div
        class="items-start flex w-[237px] max-w-full justify-between gap-5 max-md:justify-center"
      >
        <div class="text-white text-right text-sm font-medium leading-6">
          <a href="https://youtube.com" target="_blank">YouTube</a>
        </div>
        <div class="text-white text-right text-sm font-medium leading-6">
          <a href="https://t.me" target="_blank">Telegram</a>
        </div>
        <div
          class="text-white text-right text-sm font-medium leading-6 whitespace-nowrap"
        >
          <a href="https://instagram.com" target="_blank">Instagram</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
