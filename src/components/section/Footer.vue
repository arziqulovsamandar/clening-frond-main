<template>
  <div class="w-full bg-big_color dark:bg-bg_dark">
    <div
      class="container mx-auto self-stretch flex w-full flex-col pt-20 pb-28 max-md:max-w-full max-md:mt-10 max-md:pb-24 max-md:px-5"
    >
      <div
        class="bg-white dark:bg-bg_color self-stretch flex flex-col px-20 py-12 rounded-[32px] max-md:max-w-full max-md:px-5"
      >
        <div class="self-center flex w-[630px] max-w-full flex-col">
          <div class="items-start self-stretch flex flex-col max-md:max-w-full">
            <div
              class="items-center self-stretch flex flex-col max-md:max-w-full"
            >
              <div
                class="self-stretch text-btn_color text-center text-2xl font-semibold leading-10 max-md:max-w-full"
              >
                {{ $t("footer.top") }}
              </div>
              <div
                class="self-stretch text-bg_color dark:text-white text-center text-4xl font-bold leading-[56px] mt-2 max-md:max-w-full"
              >
                {{ $t("footer.title") }}
              </div>
            </div>
            <div
              class="self-stretch text-text_color dark:text-plh_color text-center text-base font-medium leading-6 mt-6 max-md:max-w-full"
            >
              {{ $t("footer.body") }}
            </div>
          </div>
          <div
            @click="modal()"
            class="text-white text-center cursor-pointer text-base font-semibold leading-4 self-center whitespace-nowrap justify-center items-center shadow-lg bg-emerald-500 w-[161px] max-w-full grow mt-12 px-5 py-4 rounded-xl max-md:mt-10"
          >
            {{ $t("btn.order") }}
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ecbeb83-3a78-43ae-9378-a97c68d9c72c?"
        class="aspect-square object-contain object-center w-[72px] overflow-hidden self-center max-w-full mt-14 max-md:mt-10"
      />
      <div
        class="text-btn_color text-3xl font-bold leading-10 self-center whitespace-nowrap mt-4"
      >
        Toza Makon
      </div>
      <div
        class="text-text_color dark:text-plh_color text-center text-base font-medium leading-6 self-center mb-0 max-w-[303px] mt-5 max-md:mb-2.5"
      >
        {{ $t("footer.quote") }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modal: Function,
});
</script>

<style lang="scss" scoped></style>
